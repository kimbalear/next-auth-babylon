import { signIn, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

function LoginPage() {

    const { data: session, status } = useSession()
    const router = useRouter()

    let w_image = '100%'
    let h_image = '100%'

    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className='login'>
            <div className='login_up'>
                <img src='/signin.jpg' width={w_image} />
            </div>
            <div className='form'>
                <img className='logo' src='/logo.png' width={36} height={36} />
                <h1>Wellcome back!</h1>
                <h6>Get access to your Wishlist and Recommendations</h6>
                <div className="field_text_num">
                    <label>Phone Number:</label>
                    <input type="number" required placeholder='Enter your phone number' />
                    <div className='helptext'>Invalid phone number</div>
                </div>
                <div className="field_text_num">
                    <label>Email Address:</label>
                    <input type="text" required placeholder='Enter email address' />
                </div>
                <div className="field_text_num">
                    <label>Password:</label>
                    <input type="password" required placeholder='Enter Your password' />
                    <div className='cta'><Link href="/recover">Forgot Password?</Link></div>
                </div>
                <button onClick={() => signIn('github')}>
                    Sign In
                </button>
                <div className='social_profile'>Or with Social Profile</div>
                <div className='social_icons'>
                    <div className='icon_social'>
                        <Image src='/facebook.png' width={48} height={48} />
                    </div>
                    <div className='icon_social'>
                        <Link href="/"><Image src='/google.png' width={48} height={48} /></Link>
                    </div>
                </div>
                <div className='have_account'>Dont' have an account? <Link href="/login"><span>Sign Up</span></Link></div>
            </div>
        </div>

    )
}

export default LoginPage