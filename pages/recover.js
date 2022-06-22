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
                <h1>Forgot your password</h1>
                <h6>We’ll help you reset it and get back on track</h6>
                <div class="field_text_num">
                    <label>Email Address:</label>
                    <input type="text" required placeholder='Enter email address' />
                </div>
                <button onClick={() => signIn('github')}>
                    Sign In
                </button>
                <div className='have_account'><span onClick={() => router.back()}>Back</span></div>
            </div>
        </div>

    )
}

export default LoginPage