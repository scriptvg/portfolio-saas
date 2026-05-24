import {
  ActivityIcon,
  InfoIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Item, ItemContent, ItemGroup, ItemMedia } from "@/components/ui/item"
import { SettingsItemSection } from "@/features/settings/components"

type StatCard = {
  label: string
  value: string
  helper: string
  delta: string
  icon: LucideIcon
}

const STAT_CARDS: ReadonlyArray<StatCard> = [
  {
    label: "Miembros totales",
    value: "12",
    helper: "Usuarios registrados en el workspace",
    delta: "+12% último mes",
    icon: UsersIcon,
  },
  {
    label: "Administradores",
    value: "4",
    helper: "Con permisos de gestión",
    delta: "+4% última semana",
    icon: ShieldCheckIcon,
  },
  {
    label: "Activos esta semana",
    value: "8",
    helper: "Conectados en los últimos 7 días",
    delta: "+8% última semana",
    icon: ActivityIcon,
  },
  {
    label: "Invitaciones pendientes",
    value: "2",
    helper: "Aún por aceptar",
    delta: "−2 última semana",
    icon: UserPlusIcon,
  },
]

type MockMember = {
  id: string
  name: string
  email: string
  completedTasks: number
  role: "Admin" | "Miembro"
  joined: string
  lastActive: string
}

const MOCK_MEMBERS: ReadonlyArray<MockMember> = [
  {
    id: "esther-howard",
    name: "Esther Howard",
    email: "estherhoward@gmail.com",
    completedTasks: 42,
    role: "Admin",
    joined: "10 Ene 2025",
    lastActive: "Activo ahora",
  },
  {
    id: "jerome-bell",
    name: "Jerome Bell",
    email: "jeromebell@gmail.com",
    completedTasks: 56,
    role: "Miembro",
    joined: "15 Feb 2025",
    lastActive: "Hace 30 min",
  },
  {
    id: "kathryn-murphy",
    name: "Kathryn Murphy",
    email: "kathrynmurphy@gmail.com",
    completedTasks: 72,
    role: "Miembro",
    joined: "15 Mar 2025",
    lastActive: "Ayer",
  },
  {
    id: "bessie-cooper",
    name: "Bessie Cooper",
    email: "bessiecooper@gmail.com",
    completedTasks: 12,
    role: "Admin",
    joined: "20 Abr 2025",
    lastActive: "Hace 2 h",
  },
  {
    id: "jacob-jones",
    name: "Jacob Jones",
    email: "jacobjones@gmail.com",
    completedTasks: 80,
    role: "Admin",
    joined: "12 May 2025",
    lastActive: "Hace 4 h",
  },
  {
    id: "annette-black",
    name: "Annette Black",
    email: "annetteblack@gmail.com",
    completedTasks: 42,
    role: "Miembro",
    joined: "08 Jun 2025",
    lastActive: "Hace 5 h",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function TeamSettings() {
  return (
    <div className="space-y-6">
      <Alert>
        <InfoIcon className="size-4" />
        <AlertTitle>Próximamente con datos reales</AlertTitle>
        <AlertDescription>
          Esta sección muestra datos de ejemplo. La integración con miembros e
          invitaciones se habilitará cuando el backend exponga el endpoint
          correspondiente.
        </AlertDescription>
      </Alert>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {STAT_CARDS.map(({ icon: Icon, label, value, helper, delta }) => (
          <Card key={label} size="sm">
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <Icon className="size-3.5" />
                {label}
              </CardDescription>
              <CardTitle className="text-2xl font-semibold tracking-tight">
                {value}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground">{helper}</p>
              <p className="text-xs text-muted-foreground">{delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <SettingsItemSection
        title={`Miembros actuales (${MOCK_MEMBERS.length})`}
        description="Lista de personas con acceso al workspace. La gestión real (invitar, cambiar rol, expulsar) llegará con el backend."
      >
        <ItemGroup>
          {MOCK_MEMBERS.map((m) => (
            <Item key={m.id} variant="outline">
              <ItemMedia>
                <Avatar className="size-9">
                  <AvatarFallback>{initials(m.name)}</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p className="text-sm font-medium">{m.name}</p>
                  <Badge variant="outline" className="font-normal">
                    {m.role}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{m.email}</p>
                <p className="text-xs text-muted-foreground md:hidden">
                  {m.lastActive}
                </p>
              </ItemContent>
              <div className="ml-auto hidden items-center gap-4 text-xs text-muted-foreground md:flex">
                <span>Tareas: {m.completedTasks}</span>
                <span>{m.joined}</span>
                <span>{m.lastActive}</span>
              </div>
            </Item>
          ))}
        </ItemGroup>
      </SettingsItemSection>
    </div>
  )
}
