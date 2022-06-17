import Head from 'next/head'
import Link from 'next/link'
import { getSession, signOut } from 'next-auth/react'
import styles from '../styles/Home.module.css'

function HomePage({ session }) {
  return (
    <>
      <Head>
        <title>Babylon | Home</title>
        <meta name='keywords' content='demo' />
      </Head>
      {
        session ? (
          <div>
            <h1 className={styles.title}>{session.user.name}</h1>
            <h4 className={styles.text}>{session.user.email}</h4>
            <img src={session.user.image} />
            <Link href='/sub'>
              <a className={styles.btn}>See Listing</a>
            </Link>
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