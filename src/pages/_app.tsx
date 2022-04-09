import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import "../styles/global.scss"

import { SignInButton } from '../components/SignInButton'

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>

      <SignInButton />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
