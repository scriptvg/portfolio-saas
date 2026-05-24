import * as React from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { linkPassword } from "@/lib/api/auth"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

const linkPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .max(128, "Máximo 128 caracteres"),
    confirmPassword: z.string().min(1, "Confirma la contraseña"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  })

type LinkPasswordFormValues = z.infer<typeof linkPasswordFormSchema>

export type LinkPasswordSectionProps = {
  onLinked: () => void | Promise<void>
}

function PasswordInput({
  id,
  invalid,
  autoComplete,
  ...rest
}: React.ComponentProps<typeof InputGroupInput> & {
  id: string
  invalid?: boolean
  autoComplete?: string
}) {
  const [visible, setVisible] = React.useState(false)
  return (
    <InputGroup>
      <InputGroupInput
        id={id}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        aria-invalid={invalid || undefined}
        {...rest}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          type="button"
          variant="ghost"
          size="icon-xs"
          aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
          aria-pressed={visible}
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export function LinkPasswordSection({ onLinked }: LinkPasswordSectionProps) {
  const form = useForm<LinkPasswordFormValues>({
    resolver: zodResolver(linkPasswordFormSchema),
    defaultValues: { password: "", confirmPassword: "" },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form

  const [submitting, setSubmitting] = React.useState(false)

  const onValid = async (values: LinkPasswordFormValues) => {
    setSubmitting(true)
    try {
      await linkPassword(values.password)
      toast.success(
        "Contraseña configurada. Ya puedes iniciar sesión con correo y contraseña."
      )
      reset({ password: "", confirmPassword: "" })
      await onLinked()
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "No se pudo guardar la contraseña"
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="space-y-4"
    >
      <FieldSet>
        <FieldGroup>
          <Field data-invalid={errors.password ? "true" : undefined}>
            <FieldLabel htmlFor="link-password">Nueva contraseña</FieldLabel>
            <FieldContent>
              <PasswordInput
                id="link-password"
                autoComplete="new-password"
                invalid={!!errors.password}
                {...register("password")}
              />
              <FieldError errors={[errors.password]} />
            </FieldContent>
          </Field>
          <Field data-invalid={errors.confirmPassword ? "true" : undefined}>
            <FieldLabel htmlFor="link-password-confirm">
              Confirmar contraseña
            </FieldLabel>
            <FieldContent>
              <PasswordInput
                id="link-password-confirm"
                autoComplete="new-password"
                invalid={!!errors.confirmPassword}
                {...register("confirmPassword")}
              />
              <FieldError errors={[errors.confirmPassword]} />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button type="submit" disabled={submitting}>
        {submitting ? <Spinner className="size-3.5" /> : null}
        {submitting ? "Guardando…" : "Guardar contraseña"}
      </Button>
    </form>
  )
}
