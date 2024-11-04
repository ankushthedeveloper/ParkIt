import { DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: Omit<DefaultUser, 'id'> & { uid: string }
  }
}
