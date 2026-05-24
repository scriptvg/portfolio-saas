import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import type { AuthUser } from "@/auth/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

function userInitials(user: AuthUser) {
  const display = user.name ?? user.email ?? "U"
  return display.slice(0, 1).toUpperCase()
}

export function UserDropdownContent({
  user,
  signOut,
}: {
  user: AuthUser
  signOut: () => void
}) {
  const navigate = useNavigate()
  const displayName = user.name ?? user.email ?? "Usuario"
  const avatar = user.image ?? ""

  return (
    <>
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatar} alt={displayName} />
            <AvatarFallback className="">{userInitials(user)}</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{displayName}</span>
            <span className="truncate text-xs text-muted-foreground">
              {user.email}
            </span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Sparkles />
          Mejorar plan
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem
          onClick={() => navigate("/dashboard/settings/privacy")}
        >
          <BadgeCheck />
          Cuenta
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          Facturación
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigate("/dashboard/settings/notifications")}
        >
          <Bell />
          Notificaciones
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        onClick={() => {
          signOut()
          toast.success("Sesión cerrada")
          navigate("/login", { replace: true })
        }}
      >
        <LogOut />
        Cerrar sesión
      </DropdownMenuItem>
    </>
  )
}

export function HeaderUserMenu({
  user,
  signOut,
}: {
  user: AuthUser
  signOut: () => void
}) {
  const displayName = user.name ?? user.email ?? "Usuario"
  const avatar = user.image ?? ""

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className=""
          aria-label="Menú de usuario"
        >
          <Avatar>
            <AvatarImage src={avatar} alt={displayName} />
            <AvatarFallback>{userInitials(user)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-56 rounded-none"
        align="end"
        side="bottom"
        sideOffset={4}
      >
        <UserDropdownContent user={user} signOut={signOut} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function NavUser({
  user,
  signOut,
}: {
  user: AuthUser
  signOut: () => void
}) {
  const { isMobile } = useSidebar()
  const displayName = user.name ?? user.email ?? "Usuario"
  const avatar = user.image ?? ""

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={avatar} alt={displayName} />
                <AvatarFallback className="rounded-full">
                  {userInitials(user)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{displayName}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <UserDropdownContent user={user} signOut={signOut} />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
