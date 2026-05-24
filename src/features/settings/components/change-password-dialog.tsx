import * as React from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { changePassword } from "@/lib/api/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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

const schema = z
  .object({
    currentPassword: z.string().min(1, "Introduce tu contraseña actual"),
    newPassword: z.string().min(8, "Mínimo 8 caracteres").max(128),
    confirmPassword: z.string().min(1, "Confirma la contraseña"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  })

type FormValues = z.infer<typeof schema>

export type ChangePasswordDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
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

export function ChangePasswordDialog({
  open,
  onOpenChange,
}: ChangePasswordDialogProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form

  React.useEffect(() => {
    if (!open) {
      reset()
    }
  }, [open, reset])

  const onValid = async (values: FormValues) => {
    try {
      await changePassword(values.currentPassword, values.newPassword)
      toast.success("Contraseña actualizada")
      onOpenChange(false)
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "No se pudo cambiar la contraseña"
      )
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex min-h-0 flex-1 flex-col"
        >
          <DialogHeader>
            <DialogTitle>Cambiar contraseña</DialogTitle>
            <DialogDescription>
              Introduce tu contraseña actual y la nueva contraseña de acceso.
            </DialogDescription>
          </DialogHeader>

          <DialogBody>
            <FieldSet>
            <FieldGroup>
              <Field data-invalid={errors.currentPassword ? "true" : undefined}>
                <FieldLabel htmlFor="current-password">
                  Contraseña actual
                </FieldLabel>
                <FieldContent>
                  <PasswordInput
                    id="current-password"
                    autoComplete="current-password"
                    invalid={!!errors.currentPassword}
                    {...register("currentPassword")}
                  />
                  <FieldError errors={[errors.currentPassword]} />
                </FieldContent>
              </Field>
              <Field data-invalid={errors.newPassword ? "true" : undefined}>
                <FieldLabel htmlFor="new-password">Nueva contraseña</FieldLabel>
                <FieldContent>
                  <PasswordInput
                    id="new-password"
                    autoComplete="new-password"
                    invalid={!!errors.newPassword}
                    {...register("newPassword")}
                  />
                  <FieldError errors={[errors.newPassword]} />
                </FieldContent>
              </Field>
              <Field data-invalid={errors.confirmPassword ? "true" : undefined}>
                <FieldLabel htmlFor="confirm-password">
                  Confirmar contraseña
                </FieldLabel>
                <FieldContent>
                  <PasswordInput
                    id="confirm-password"
                    autoComplete="new-password"
                    invalid={!!errors.confirmPassword}
                    {...register("confirmPassword")}
                  />
                  <FieldError errors={[errors.confirmPassword]} />
                </FieldContent>
              </Field>
            </FieldGroup>
            </FieldSet>
          </DialogBody>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Spinner className="size-3.5" /> : null}
              {isSubmitting ? "Guardando…" : "Guardar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
