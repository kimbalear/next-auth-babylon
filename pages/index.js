import Head from 'next/head'
import Link from 'next/link'
import { getSession, signOut } from 'next-auth/react'
import styles from '../styles/Home.module.css'

function HomePage({ session }) {
  console.log(session.user)
  return (
    <>
      <Head>
        <title>Babylon | Home</title>
        <meta name='keywords' content='demo' />
      </Head>
      {
        session ? (
          <div>
            Patient's data
          </div>
        ) : (
          <div>
            <p>Skeleton</p>
            <Link href='/sub'>
              <a>See Ninja Listing</a>
            </Link>
          </div>

        )
      }
      <button onClick={() => signOut()}>
        Logout
      </button>
    </>
  )
}
export const getServerSideProps = async (context) => {

  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
  return {
    props: {
      session
    }
  }
}
export default HomePage