export type AuthUser = {
  id: string
  name: string
  email: string
  image: string | null
  providers: {
    password: boolean
    google: boolean
    github: boolean
  }
}
