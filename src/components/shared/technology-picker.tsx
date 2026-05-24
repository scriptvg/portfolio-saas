import * as React from "react"

import { useTechnologiesQuery } from "@/lib/queries/technologies"
import { getTechnologyIconComponent } from "@/lib/technology-icon-options"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Spinner } from "@/components/ui/spinner"

export function TechnologyPicker({
  value,
  onChange,
  invalid,
  portalContainer,
  inputId,
  placeholder = "Buscar o añadir tecnologías…",
}: {
  value: string[]
  onChange: (technologyIds: string[]) => void
  invalid?: boolean
  portalContainer?: HTMLElement | null
  inputId: string
  placeholder?: string
}) {
  const { data: technologies = [], isLoading } = useTechnologiesQuery()

  const anchor = useComboboxAnchor()

  const selected = React.useMemo(
    () => technologies.filter((tech) => value.includes(tech.id)),
    [technologies, value]
  )

  if (isLoading) {
    return (
      <div className="flex h-8 items-center gap-2 text-sm text-muted-foreground">
        <Spinner className="size-4" />
        Cargando tecnologías…
      </div>
    )
  }

  return (
    <Combobox
      multiple
      autoHighlight
      items={technologies}
      value={selected}
      onValueChange={(items) => onChange(items.map((tech) => tech.id))}
      itemToStringValue={(tech) => tech.name}
      isItemEqualToValue={(a, b) => a.id === b.id}
    >
      <ComboboxChips
        ref={anchor}
        className="w-full"
        aria-invalid={invalid || undefined}
      >
        <ComboboxValue>
          {selected.map((tech) => {
            const Icon = getTechnologyIconComponent(tech.icon)

            return (
              <ComboboxChip key={tech.id}>
                {Icon ? (
                  <Icon
                    className="size-3.5 shrink-0"
                    style={{ color: tech.color }}
                    aria-hidden
                  />
                ) : null}
                {tech.name}
              </ComboboxChip>
            )
          })}
        </ComboboxValue>

        <ComboboxChipsInput id={inputId} placeholder={placeholder} />
      </ComboboxChips>

      <ComboboxContent
        anchor={anchor}
        container={portalContainer}
        className="z-50"
      >
        <ComboboxEmpty>No se encontraron tecnologías.</ComboboxEmpty>

        <ComboboxList>
          {(tech) => {
            const Icon = getTechnologyIconComponent(tech.icon)

            return (
              <ComboboxItem key={tech.id} value={tech}>
                <span className="flex items-center gap-2">
                  {Icon ? (
                    <Icon
                      className="size-4 shrink-0"
                      style={{ color: tech.color }}
                      aria-hidden
                    />
                  ) : null}
                  {tech.name}
                </span>
              </ComboboxItem>
            )
          }}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
