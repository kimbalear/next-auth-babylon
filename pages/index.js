import Head from 'next/head'
import Link from 'next/link'
import { getSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Slider from '../components/slider'


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
            <p><b>Welcome {session.user.name}</b></p><br />
            <p><b>mail:</b> {session.user.email}</p>
            <p><b>Phone:</b> ### ### ###</p>
            <p><b>Session expires</b> {session.expires}</p>
          </div>
        ) : (
          <>
          </>
        )
      }
      <Slider />
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
        <div className='des'>
          <div className='title'>
            <h2>We’re employee benefit at 7500+ hospital</h2>
          </div>
          <div className='col1'>
            <p className='l1'>7,777</p>
            <p className='l2'>User</p>
            <p className='l3'>Highly Verified</p>
          </div>
          <div className='col2'>
            <p className='l1'>10,000</p>
            <p className='l2'>Clinics</p>
            <p className='l3'>Clinics Highly Verified</p>
          </div>
          <div className='col3'>
            <p className='l1'>100%</p>
            <p className='l2'>Feedback</p>
            <p className='l3'>Potential Customers</p>
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