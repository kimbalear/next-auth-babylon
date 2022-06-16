import Head from 'next/head'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'

function HomePage({ session }) {
  return (
    <div>
      <NavBar/>
      <Image src='/images/logo.png' width={56} height={56}/>
      {
        session ? (
          <div>
            <h1>{session.user.name}</h1>
            <h4>{session.user.email}</h4>
            <img src={session.user.image} />
          </div>
        ) : (
          <p>Skeleton</p>
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