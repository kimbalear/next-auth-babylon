import { signIn, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'

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
                <img src='/login_up.jpg' width={w_image} />
            </div>
            <div className='form'>
                <img className='logo' src='/logo.png' width={36} height={36} />
                <h1>Create an account</h1>
                <div class="field">
                    <label>Phone Number:</label>
                    <input type="number" required placeholder='Enter your phone number' />
                    <div className='helptext'>Invalid phone number</div>
                </div>
                <div class="field">
                    <label>Your Name:</label>
                    <input type="text" required placeholder='Enter Your Name' />
                </div>
                <div class="field">
                    <label>Sex at birth:</label>
                    <input type="text" required placeholder='Enter Your sex' />
                </div>
                <div class="field">
                    <label>Birth Date:</label>
                    <input type="date" required placeholder='Enter Your birth date' />
                </div>
                <button onClick={() => signIn('github')}>
                    Signin with github
                </button>
            </div>
        </div>

    )
}

export default LoginPage