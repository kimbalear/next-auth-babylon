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
                <img src='/login_up.jpg' width={w_image} />
            </div>
            <div className='form'>
                <img className='logo' src='/logo.png' width={36} height={36} />
                <h1>You’re new here!</h1>
                <h6>Sign up with your email and personal details to get started!</h6>
                <div class="field_text_num_text_num">
                    <label>Phone Number:</label>
                    <input type="number" required placeholder='Enter your phone number' />
                    <div className='helptext'>Invalid phone number</div>
                </div>
                <div class="field_text_num">
                    <label>Your Name:</label>
                    <input type="text" required placeholder='Enter Your Name' />
                </div>
                <div class="field_text_num">
                    <label>Sex at birth:</label>
                    <input type="text" required placeholder='Enter Your sex' />
                </div>
                <div class="field_date">
                    <label>Birth Date:</label>
                    <input type="date" required placeholder='Enter Your birth date' />
                </div>
                <button onClick={() => signIn('github')}>
                    Sign Up
                </button>
                <div className='social_profile'>Or with Social Profile</div>
                <div className='social_icons'>
                    <div className='icon_social'>
                        <Image src='/facebook.png' width={48} height={48} />
                    </div>
                    <div className='icon_social'>
                        <Link href="/"><Image src='/google.png' width={48} height={48} /></Link>
                    </div>
                    <div className='icon_social'>
                        <Image src='/github.png' width={48} height={48}  onClick={() => signIn('github')}/>
                    </div>
                </div>
                <div className='have_account'>Already have an account?<Link href="/signin"><span>Sign In</span></Link></div>
            </div>
        </div>

    )
}

export default LoginPage