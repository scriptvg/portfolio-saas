import { HexColorPicker } from "react-colorful"

import { Button } from "../ui/button"
import { ButtonGroup } from "../ui/button-group"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const PRESET_COLORS = [
  "#000000",
  "#ffffff",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#64748b",
]

type ColorInputProps = {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
  id?: string
}

export function ColorInput({
  value,
  onChange,
  disabled,
  placeholder = "#000000",
  id,
}: ColorInputProps) {
  return (
    <ButtonGroup className="w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            disabled={disabled}
            aria-label="Seleccionar color"
            className=""
          >
            <span
              aria-hidden="true"
              className="size-4 border border-input"
              style={{ backgroundColor: value }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-fit gap-3">
          <HexColorPicker className="" color={value} onChange={onChange} />
          <div className="grid grid-cols-6 gap-1.5">
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset}
                type="button"
                aria-label={`Color ${preset}`}
                onClick={() => onChange(preset)}
                className="size-6 border border-input transition-transform hover:scale-110 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                style={{ backgroundColor: preset }}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Input
        id={id}
        type="text"
        spellCheck={false}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-mono"
      />
    </ButtonGroup>
  )
}
