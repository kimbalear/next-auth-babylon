import { SessionProvider } from 'next-auth/react'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  </Layout>
}

export default MyApp
