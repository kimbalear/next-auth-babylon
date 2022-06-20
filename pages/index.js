import Head from 'next/head'
import Link from 'next/link'
import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'

function HomePage({ session }) {
  console.log(session)

  return (
    <>
      <Head>
        <title>Babylon | Home</title>
        <meta name='keywords' content='demo' />
      </Head>
      {
        session ? (
          <div className='card_session'>
            <p><b>Welcome {session.user.name}</b></p><br/>
            <p><b>mail:</b> {session.user.email}</p>
            <p><b>Phone:</b> ### ### ###</p>
            <p><b>Session expires</b> {session.expires}</p>
          </div>
        ) : (
          <>
          </>
        )
      }
      <div className='twocols'>
              <div className='title'>
                <h3>Services</h3>
              </div>
              <div className='lft'>
                <div className='card1'>
                  <div className='avatar'>
                    <Image src='/sympton_checker.png' width={48} height={48} />
                  </div>
                  <h4>Sympton Checker</h4>
                  <p>Contact us to know about your disease</p>
                </div>
              </div>
              <div className='rgt'>
                <div className='card2'>
                  <div className='avatar'>
                    <Image src='/provider_locator.png' width={48} height={48} />
                  </div>
                  <h4>Provider Locator</h4>
                  <p>We'll help you find a clinic nearby</p>
                </div>
              </div>
            </div>
    </>
  )
}
export const getServerSideProps = async (context) => {

  const session = await getSession(context)
  /*
    if (!session) return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  */
  return {
    props: {
      session
    }
  }
}
export default HomePage