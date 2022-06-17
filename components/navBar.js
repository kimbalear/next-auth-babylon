import Link from 'next/link'
import Image from 'next/image'
import { getSession } from 'next-auth/react'

const Navbar = ({ session }) => {
    console.log(session)
    return (
        <div className='header'>
            <div className='logo'>
                <Link href="/"><Image src='/logo.png' width={36} height={36} /></Link>
            </div>
            <nav className='navs'>
                <Link href="/"><a>Home</a></Link>
                <Link href="/provider_loc"><a>Provider Locator</a></Link>
                <Link href="/symptom_ck"><a>Symptom Checker</a></Link>
                <Link href="/more"><a>More</a></Link>
                {/*<Link href="/login"><a>Sign In/Up</a></Link>*/}
            </nav>
            <div className='cta'>
                {
                    session ? (
                        <button onClick={() => signOut()}>
                            Logout
                        </button>
                    ) : (
                        <button onClick={() => signIn('github')}>
                            Sign In/Up
                        </button>
                    )
                }
            </div>
            <div className='lng'><small>EN | VN</small></div>
        </div>

    );
}

export const getServerSideProps = async (context) => {

    const session = await getSession(context)

    return {
        props: {
            session: await getSession(context)
        }
    }
}

export default Navbar;