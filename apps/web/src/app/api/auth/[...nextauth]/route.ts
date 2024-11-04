import NextAuth from 'next-auth'
import { authOptions } from '@parkit/network/src/config/authOptions'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
