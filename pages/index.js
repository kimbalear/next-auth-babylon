import Head from 'next/head'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import Link from 'next/link'
import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function HomePage({ session }) {
  return (
    <div>
      <Image src='/images/logo.png' width={56} height={56} />
      {
        session ? (
          <div className={styles.container}>
            <h1>{session.user.name}</h1>
            <h4>{session.user.email}</h4>
            <img src={session.user.image} />
            <Link href='/ninjas'>
              <a>See Ninja Listing</a>
            </Link>
          </div>
        ) : (
          <div>
            <p>Skeleton</p>
            <Link href='/ninjas'>
              <a>See Ninja Listing</a>
            </Link>
          </div>

        )
      }
      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
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