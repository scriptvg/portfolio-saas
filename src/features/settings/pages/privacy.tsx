import * as React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { useAuth } from "@/auth/auth-context"
import {
  ChangePasswordDialog,
  DeleteAccountDialog,
  EditProfileDialog,
  LinkPasswordSection,
  OAuthItem,
  PersonalDataItem,
  SettingsDangerZone,
  SettingsItemSection,
  SettingsRowItem,
  useOAuthProviders,
} from "@/features/settings/components"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ItemGroup } from "@/components/ui/item"

export function PrivacySettings() {
  const navigate = useNavigate()
  const { user, refreshUser, signOut } = useAuth()
  const {
    providers,
    oauthBusy,
    unlinkBusy,
    canUnlinkGoogle,
    canUnlinkGitHub,
    linkProvider,
    unlinkProvider,
  } = useOAuthProviders()

  const [editProfileOpen, setEditProfileOpen] = React.useState(false)
  const [changePasswordOpen, setChangePasswordOpen] = React.useState(false)
  const [deleteAccountOpen, setDeleteAccountOpen] = React.useState(false)

  React.useEffect(() => {
    void refreshUser().catch(() => {})
  }, [refreshUser])

  const hasPassword = providers?.password ?? false
  const cannotUnlinkAny =
    (providers?.google && !canUnlinkGoogle) ||
    (providers?.github && !canUnlinkGitHub)

  function handleSignOut() {
    signOut()
    navigate("/login")
    toast.success("Sesión cerrada")
  }

  return (
    <div className="space-y-8">
      <SettingsItemSection
        title="Perfil de cuenta"
        description="Información visible en el panel y métodos de acceso."
        actions={
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Cerrar sesión
          </Button>
        }
      >
        <ItemGroup>
          <PersonalDataItem
            user={user}
            onEdit={() => setEditProfileOpen(true)}
          />
          <SettingsRowItem
            title="Correo electrónico"
            description={
              <>
                {user?.email ?? "Sin correo configurado"}
                <span className="mt-1 block text-xs text-muted-foreground">
                  Solo lectura. Debe coincidir con Google o GitHub al vincular cuentas.
                </span>
              </>
            }
          />
          {hasPassword ? (
            <SettingsRowItem
              title="Contraseña"
              description="••••••••"
              actions={
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setChangePasswordOpen(true)}
                >
                  Cambiar
                </Button>
              }
            />
          ) : null}
        </ItemGroup>
      </SettingsItemSection>

      {!hasPassword ? (
        <SettingsItemSection
          title="Contraseña"
          description="Configura una contraseña para iniciar sesión con correo."
        >
          <LinkPasswordSection
            onLinked={async () => {
              await refreshUser()
            }}
          />
        </SettingsItemSection>
      ) : null}

      <SettingsItemSection
        title="Cuentas vinculadas"
        description="Conecta o desconecta proveedores de inicio de sesión."
      >
        {cannotUnlinkAny ? (
          <Alert>
            <AlertDescription>
              Debes mantener al menos un método de acceso activo (contraseña u otro
              proveedor).
            </AlertDescription>
          </Alert>
        ) : null}
        <ItemGroup>
          <OAuthItem
            provider="google"
            linked={providers?.google ?? false}
            accountLabel={user?.email}
            busy={oauthBusy === "google"}
            unlinkBusy={unlinkBusy === "google"}
            canUnlink={canUnlinkGoogle}
            onLink={() => void linkProvider("google")}
            onUnlink={() => void unlinkProvider("google")}
          />
          <OAuthItem
            provider="github"
            linked={providers?.github ?? false}
            busy={oauthBusy === "github"}
            unlinkBusy={unlinkBusy === "github"}
            canUnlink={canUnlinkGitHub}
            onLink={() => void linkProvider("github")}
            onUnlink={() => void unlinkProvider("github")}
          />
        </ItemGroup>
      </SettingsItemSection>

      <SettingsDangerZone
        deleteDisabled={false}
        onDeleteAccount={() => setDeleteAccountOpen(true)}
      />

      <EditProfileDialog
        user={user}
        open={editProfileOpen}
        onOpenChange={setEditProfileOpen}
        onSaved={() => void refreshUser()}
      />
      <ChangePasswordDialog
        open={changePasswordOpen}
        onOpenChange={setChangePasswordOpen}
      />
      <DeleteAccountDialog
        open={deleteAccountOpen}
        onOpenChange={setDeleteAccountOpen}
      />
    </div>
  )
}
