/**
 * Scrape reui.io registry JSON into agent skills.
 *
 * Registry: https://reui.io/r/{style}/{name}.json
 * Docs: https://reui.io/docs/registry
 * Repo: https://github.com/keenthemes/reui
 *
 * Usage:
 *   node scripts/scrape-reui-skills.mjs accordion
 *   node scripts/scrape-reui-skills.mjs --all
 *   node scripts/scrape-reui-skills.mjs --discover   # refresh category list from /components HTML
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, ".agents", "skills", "reui");
const COMPONENTS_DIR = path.join(OUT_DIR, "components");
const MANIFEST_PATH = path.join(OUT_DIR, "manifest.json");
const BASE_URL = "https://reui.io/r/default";
const COMPONENTS_PAGE = "https://reui.io/components";
const CONCURRENCY = 12;

/** ReUI custom primitives (registry:ui), not c-* blocks */
const REUI_PRIMITIVES = [
  "filters",
  "kanban",
  "data-grid",
  "sortable",
  "stepper",
  "timeline",
  "tree",
];

/** Block categories from reui.io/components (c-{slug}-{n}) */
const BLOCK_CATEGORIES = [
  "accordion",
  "alert",
  "autocomplete",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "combobox",
  "command",
  "dialog",
  "drawer",
  "empty",
  "field",
  "filters",
  "frame",
  "input",
  "item",
  "kanban",
  "kbd",
  "label",
  "menubar",
  "pagination",
  "popover",
  "progress",
  "rating",
  "resizable",
  "scrollspy",
  "select",
  "separator",
  "sheet",
  "skeleton",
  "slider",
  "sonner",
  "sortable",
  "spinner",
  "stepper",
  "switch",
  "table",
  "tabs",
  "textarea",
  "timeline",
  "toggle",
  "tooltip",
  "tree",
];

function adaptSource(content) {
  return content
    .replaceAll("@/components/reui/", "@/components/reui/")
    .replaceAll(
      "@/app/(create)/components/icon-placeholder",
      "@/components/ui/icon-placeholder",
    )
    .replaceAll(
      'from "@/components/examples/',
      'from "@/components/examples/reui/',
    );
}

/**
 * @typedef {{ name: string, title: string, description: string, type?: string, registryDependencies?: string[], dependencies?: string[], files: { path: string, content: string, target?: string }[] }} RegistryItem
 */

async function fetchRegistryItem(name) {
  const res = await fetch(`${BASE_URL}/${name}.json`);
  if (!res.ok) return null;
  return /** @type {RegistryItem} */ (await res.json());
}

async function mapPool(items, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, worker),
  );
  return results;
}

function parseVariant(item) {
  const file =
    item.files?.find((f) => f.type === "registry:block" || f.type === "registry:component") ??
    item.files?.[0];
  return {
    id: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "",
    type: item.type ?? "",
    dependencies: [
      ...(item.registryDependencies ?? []),
      ...(item.dependencies ?? []),
    ],
    source: file?.content ? adaptSource(file.content) : "",
    path: file?.target ?? file?.path ?? "",
  };
}

async function scrapeBlockCategory(slug) {
  const names = Array.from({ length: 99 }, (_, i) => `c-${slug}-${i + 1}`);
  const items = await mapPool(names, async (name) => {
    const item = await fetchRegistryItem(name);
    return item ? parseVariant(item) : null;
  });
  return items.filter(Boolean);
}

async function scrapePrimitive(slug) {
  const item = await fetchRegistryItem(slug);
  return item ? [parseVariant(item)] : [];
}

async function discoverFromComponentsPage() {
  const res = await fetch(COMPONENTS_PAGE);
  if (!res.ok) throw new Error(`Failed to fetch ${COMPONENTS_PAGE}: ${res.status}`);
  const html = await res.text();
  const blocks = [
    ...new Set(
      [...html.matchAll(/\bc-([a-z0-9]+)-\d+\b/g)].map((m) => m[1]),
    ),
  ].sort();
  const primitives = REUI_PRIMITIVES.filter((p) => html.includes(`"${p}"`) || html.includes(p));
  return { blocks, primitives, scrapedAt: new Date().toISOString() };
}

function titleCase(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function componentSkillBody(slug, variants, { includePrimitive } = {}) {
  const lines = [
    `# ${titleCase(slug)} (ReUI)`,
    "",
    `From [reui.io/components](https://reui.io/components). Style: \`default\`.`,
    `Install blocks: \`pnpm dlx shadcn@latest add @reui/<id>\` (add \`@reui\` registry in components.json — see [registry docs](https://reui.io/docs/registry)).`,
    "",
    `${variants.length} entr(y/ies).`,
    "",
    "## Index",
    "",
    "| ID | Title | Type | Notes |",
    "| --- | --- | --- | --- |",
  ];

  for (const v of variants) {
    const deps =
      v.dependencies.length > 0 ? `deps: ${v.dependencies.join(", ")}` : "";
    lines.push(
      `| \`${v.id}\` | ${v.title} | ${v.type || "—"} | ${v.description || deps} |`,
    );
  }

  lines.push("", "## Source", "");

  for (const v of variants) {
    lines.push(`### ${v.title} (\`${v.id}\`)`, "");
    if (v.path) lines.push(`Target: \`${v.path}\``, "");
    if (v.description) lines.push(v.description, "");
    lines.push("```tsx", v.source.trim(), "```", "");
  }

  if (includePrimitive) {
    lines.splice(
      6,
      0,
      "",
      "> Includes the base `@reui/{slug}` primitive plus `c-{slug}-*` demo blocks.",
    );
  }

  return lines.join("\n");
}

function masterSkillMarkdown(componentFiles) {
  const total = componentFiles.reduce((n, c) => n + c.count, 0);
  const rows = componentFiles
    .map(
      (c) =>
        `| ${c.title} | [\`components/${c.slug}.md\`](./components/${c.slug}.md) | ${c.count} |`,
    )
    .join("\n");

  return `---
name: reui
description: >-
  ReUI shadcn registry — 1000+ component blocks from reui.io (Keenthemes).
  Use for data grids, filters, kanban, steppers, and styled shadcn patterns.
  Install via pnpm dlx shadcn@latest add @reui/{name}. Re-scrape with
  node scripts/scrape-reui-skills.mjs.
---

# ReUI component skills

Reference from [reui.io](https://reui.io/components) — registry API \`https://reui.io/r/default/{name}.json\`.

**${total}** variants across **${componentFiles.length}** categories (scraped style: \`default\`).

## Setup (once per project)

\`\`\`json
{
  "registries": {
    "@reui": "https://reui.io/r/{style}/{name}.json"
  }
}
\`\`\`

\`\`\`bash
pnpm dlx shadcn@latest add @reui/c-accordion-1
pnpm dlx shadcn@latest add @reui/filters
\`\`\`

## Project notes

- Demos use \`export function Pattern()\` — rename when vendoring into your app
- Custom primitives live under \`@/components/reui/*\` after install
- Pair with \`shadcn\`, \`shadcnui-blocks\`, and \`tailwind-v4-shadcn\` skills

## Components

| Component | Reference | Variants |
| --- | --- | --- |
${rows}

## Refresh

\`\`\`bash
node scripts/scrape-reui-skills.mjs --all
node scripts/scrape-reui-skills.mjs --discover
node scripts/scrape-reui-skills.mjs accordion button filters
\`\`\`
`;
}

async function scrapeCategory(slug) {
  const blockVariants = await scrapeBlockCategory(slug);
  let variants = blockVariants;

  if (REUI_PRIMITIVES.includes(slug)) {
    const primitive = await scrapePrimitive(slug);
    variants = [...primitive, ...blockVariants.filter((b) => b.id !== slug)];
  }

  return variants;
}

async function writeComponentSkill(slug, variants) {
  if (variants.length === 0) {
    console.warn(`skip ${slug}: no variants`);
    return null;
  }
  const body = componentSkillBody(slug, variants, {
    includePrimitive: REUI_PRIMITIVES.includes(slug),
  });
  const outPath = path.join(COMPONENTS_DIR, `${slug}.md`);
  await writeFile(outPath, body, "utf8");
  console.log(
    `wrote ${slug} (${variants.length}) → ${path.relative(ROOT, outPath)}`,
  );
  return { slug, title: titleCase(slug), count: variants.length };
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes("--discover")) {
    const manifest = await discoverFromComponentsPage();
    await mkdir(OUT_DIR, { recursive: true });
    await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
    console.log(
      `manifest: ${manifest.blocks.length} block categories → ${path.relative(ROOT, MANIFEST_PATH)}`,
    );
    if (!args.includes("--all") && args.length === 1) return;
  }

  let categories = BLOCK_CATEGORIES;
  try {
    const raw = await readFile(MANIFEST_PATH, "utf8");
    const manifest = JSON.parse(raw);
    if (manifest.blocks?.length) categories = manifest.blocks;
  } catch {
    /* use default BLOCK_CATEGORIES */
  }

  const slugs =
    args.length === 0 || (args.length === 1 && args[0] === "--discover")
      ? ["accordion"]
      : args.includes("--all")
        ? [...new Set(categories)]
        : args.filter((a) => !a.startsWith("--"));

  await mkdir(COMPONENTS_DIR, { recursive: true });

  const written = [];
  for (const slug of slugs) {
    const variants = await scrapeCategory(slug);
    const meta = await writeComponentSkill(slug, variants);
    if (meta) written.push(meta);
  }

  if (written.length > 0) {
    await writeFile(path.join(OUT_DIR, "SKILL.md"), masterSkillMarkdown(written), "utf8");
    console.log(`wrote SKILL.md (${written.length} categories)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
