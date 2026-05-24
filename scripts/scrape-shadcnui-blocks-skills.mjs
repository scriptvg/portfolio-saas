/**
 * Scrape shadcnui-blocks.com registry JSON into agent skills.
 *
 * Source: https://www.shadcnui-blocks.com/r/{slug}-{nn}.json
 * Site repo: https://github.com/akash3444/shadcn-ui-blocks
 *
 * Usage:
 *   node scripts/scrape-shadcnui-blocks-skills.mjs accordion
 *   node scripts/scrape-shadcnui-blocks-skills.mjs --all
 *   node scripts/scrape-shadcnui-blocks-skills.mjs alert button
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, ".agents", "skills", "shadcnui-blocks");
const COMPONENTS_DIR = path.join(OUT_DIR, "components");
const BASE_URL = "https://www.shadcnui-blocks.com/r";

/** Slugs under /components/* on shadcnui-blocks.com */
const COMPONENT_SLUGS = [
  "accordion",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "card",
  "carousel",
  "checkbox",
  "collapsible",
  "dropdown-menu",
  "input",
  "input-otp",
  "navigation-menu",
  "pagination",
  "progress",
  "radio-group",
  "select",
  "separator",
  "slider",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "tooltip",
];

function adaptSource(content) {
  return content
    .replaceAll("@/registry/ui/", "@/components/ui/")
    .replaceAll("@/registry/bases/", "@/components/ui/")
    .replaceAll("@/components/customized/", "@/components/examples/shadcnui-blocks/");
}

async function fetchVariant(slug, index) {
  const id = `${slug}-${String(index).padStart(2, "0")}`;
  const url = `${BASE_URL}/${id}.json`;
  const res = await fetch(url);
  if (!res.ok) return null;
  return /** @type {RegistryItem} */ (await res.json());
}

/**
 * @typedef {{ name: string, title: string, description: string, registryDependencies?: string[], files: { path: string, content: string }[] }} RegistryItem
 */

async function scrapeComponent(slug) {
  const variants = [];
  for (let i = 1; i <= 99; i++) {
    const item = await fetchVariant(slug, i);
    if (!item) break;
    const file = item.files?.[0];
    variants.push({
      id: item.name,
      title: item.title,
      description: item.description ?? "",
      dependencies: item.registryDependencies ?? [],
      source: file ? adaptSource(file.content) : "",
      path: file?.path ?? "",
    });
  }
  return variants;
}

function componentSkillBody(slug, variants) {
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const lines = [
    `# ${title} (shadcnui-blocks)`,
    "",
    `Scraped from [shadcnui-blocks.com/components/${slug}](https://www.shadcnui-blocks.com/components/${slug}).`,
    `${variants.length} variant(s). Install base UI with \`pnpm dlx shadcn@latest add ${slug}\` when \`registryDependencies\` includes it.`,
    "",
    "## Variants index",
    "",
    "| ID | Title | Notes |",
    "| --- | --- | --- |",
  ];

  for (const v of variants) {
    const deps =
      v.dependencies.length > 0 ? `deps: ${v.dependencies.join(", ")}` : "";
    lines.push(`| \`${v.id}\` | ${v.title} | ${v.description || deps} |`);
  }

  lines.push("", "## Variant source", "");

  for (const v of variants) {
    lines.push(`### ${v.title} (\`${v.id}\`)`, "");
    if (v.description) lines.push(v.description, "");
    lines.push("```tsx", v.source.trim(), "```", "");
  }

  return lines.join("\n");
}

function masterSkillMarkdown(componentFiles) {
  const rows = componentFiles
    .map(
      (c) =>
        `| ${c.title} | [\`components/${c.slug}.md\`](./components/${c.slug}.md) | ${c.count} |`,
    )
    .join("\n");

  return `---
name: shadcnui-blocks
description: >-
  Curated shadcn/ui component variants scraped from shadcnui-blocks.com registry.
  Use when implementing accordions, alerts, buttons, forms, or other UI patterns
  that match the site's customized demos. Prefer these references over inventing
  layouts from scratch. Re-scrape with node scripts/scrape-shadcnui-blocks-skills.mjs.
---

# shadcnui-blocks component skills

Reference implementations from [shadcnui-blocks.com](https://www.shadcnui-blocks.com) (registry API: \`/r/{slug}-{nn}.json\`).

## Project adaptation

- Imports: \`@/registry/ui/*\` → \`@/components/ui/*\`
- Place copied demos under \`src/components/examples/shadcnui-blocks/\` if you vendor files
- Match existing \`shadcn\` and \`tailwind-v4-shadcn\` skills for tokens and composition rules
- Run \`pnpm dlx shadcn@latest add <component>\` for any \`registryDependencies\`

## Components

| Component | Reference | Variants |
| --- | --- | --- |
${rows}

## Refresh data

\`\`\`bash
node scripts/scrape-shadcnui-blocks-skills.mjs --all
node scripts/scrape-shadcnui-blocks-skills.mjs accordion alert
\`\`\`
`;
}

async function writeComponentSkill(slug, variants) {
  if (variants.length === 0) {
    console.warn(`skip ${slug}: no variants found`);
    return null;
  }
  const body = componentSkillBody(slug, variants);
  const outPath = path.join(COMPONENTS_DIR, `${slug}.md`);
  await writeFile(outPath, body, "utf8");
  console.log(`wrote ${slug} (${variants.length} variants) → ${path.relative(ROOT, outPath)}`);
  return {
    slug,
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    count: variants.length,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const slugs =
    args.length === 0
      ? ["accordion"]
      : args.includes("--all")
        ? COMPONENT_SLUGS
        : args.filter((a) => !a.startsWith("--"));

  await mkdir(COMPONENTS_DIR, { recursive: true });

  const written = [];
  for (const slug of slugs) {
    const variants = await scrapeComponent(slug);
    const meta = await writeComponentSkill(slug, variants);
    if (meta) written.push(meta);
  }

  if (written.length > 0) {
    const master = masterSkillMarkdown(written);
    await writeFile(path.join(OUT_DIR, "SKILL.md"), master, "utf8");
    console.log(`wrote master SKILL.md (${written.length} components)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
