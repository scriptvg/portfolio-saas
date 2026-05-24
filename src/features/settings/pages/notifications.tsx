import {
  SettingsItemSection,
  SettingsLoading,
  SettingsToggleRow,
} from "@/features/settings/components"
import { ModuleError } from "@/components/shared/module-error"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ItemGroup } from "@/components/ui/item"
import {
  usePatchNotificationsMutation,
  useSettingsQuery,
} from "@/features/settings/hooks/use-settings-queries"

export function NotificationsSettings() {
  const { data, isPending, isError, error, refetch } = useSettingsQuery()
  const patchNotifications = usePatchNotificationsMutation()

  if (isPending) {
    return <SettingsLoading />
  }

  if (isError || !data) {
    return (
      <ModuleError
        title="No se pudieron cargar las preferencias de notificaciones"
        error={error}
        onRetry={() => void refetch()}
      />
    )
  }

  const prefs = data.notifications

  return (
    <div className="space-y-8">
      <SettingsItemSection
        title="Seguridad"
        description="Avisos sobre el acceso a tu cuenta."
      >
        <ItemGroup>
          <SettingsToggleRow
            title="Inicio de sesión desde un dispositivo nuevo"
            description="Te avisamos si detectamos un acceso inusual."
            checked={prefs.loginNewDevice}
            onCheckedChange={(checked) =>
              patchNotifications.mutate({ loginNewDevice: checked })
            }
          />
          <SettingsToggleRow
            title="Proveedor vinculado o desvinculado"
            description="Google o GitHub conectados a tu cuenta."
            checked={prefs.providerLinked}
            onCheckedChange={(checked) =>
              patchNotifications.mutate({ providerLinked: checked })
            }
          />
          <SettingsToggleRow
            title="Cambios de contraseña"
            description="Cuando se configure o actualice tu contraseña."
            checked={prefs.passwordChanged}
            onCheckedChange={(checked) =>
              patchNotifications.mutate({ passwordChanged: checked })
            }
          />
        </ItemGroup>
      </SettingsItemSection>

      <SettingsItemSection
        title="Producto"
        description="Resumen y errores del portfolio."
      >
        <ItemGroup>
          <SettingsToggleRow
            title="Resumen semanal"
            description="Actividad del portfolio y del panel."
            checked={prefs.weeklyDigest}
            onCheckedChange={(checked) =>
              patchNotifications.mutate({ weeklyDigest: checked })
            }
          />
          <SettingsToggleRow
            title="Errores al publicar"
            description="Si falla la sincronización con el sitio público."
            checked={prefs.publishErrors}
            onCheckedChange={(checked) =>
              patchNotifications.mutate({ publishErrors: checked })
            }
          />
          <SettingsToggleRow
            title="Ediciones de contenido"
            description="Cambios en tecnologías o experiencias."
            checked={prefs.contentEdits}
            onCheckedChange={(checked) =>
              patchNotifications.mutate({ contentEdits: checked })
            }
          />
        </ItemGroup>
      </SettingsItemSection>

      <Alert>
        <AlertDescription>
          Las notificaciones de seguridad críticas no se podrán desactivar
          cuando el envío por correo esté activo.
        </AlertDescription>
      </Alert>
    </div>
  )
}
