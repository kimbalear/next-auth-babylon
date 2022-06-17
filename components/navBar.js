import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react';
import styles from '../styles/Home.module.css'
import { useState } from "react";

const Navbar = () => {
    const { data: session, status } = useSession()

    const [toggleViewMode, setToggleViewMode] = useState(false);

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <Link href="/"><Image src='/logo.png' width={36} height={36} /></Link>
                </div>
                <nav className='navs'>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/provider_loc"><a>Provider Locator</a></Link>
                    <Link href="/symptom_ck"><a>Symptom Checker</a></Link>
                    <Link href="/more"><a>More</a></Link>
                </nav>
                <div className='cta'>
                    {
                        session ? (
                            <img src={session.user.image} width={36} height={36} onClick={() => setToggleViewMode(!toggleViewMode)} />
                        ) : (
                            <button onClick={() => signIn('github')}>
                                Sign In/Up
                            </button>
                        )
                    }
                </div>
                <div className='lng'><small>En | Vn</small></div>
            </div>
            <div className='card_user' >
                {
                    session ? (
                        <>
                            {toggleViewMode ? (
                                <>
                                    <div className='avatar'>
                                        <img src={session.user.image} width={100} height={100} />
                                    </div>
                                    <div className='contents'>
                                        <h4>{session.user.name}</h4>
                                        <p>{session.user.email}</p>

                                        <Link href='/sub'>
                                            <a className={styles.btn}>See Listing</a>
                                        </Link>
                                    </div>
                                </>
                            ) : ('Search')}
                        </>
                    ) : (
                        <button onClick={() => signIn('github')}>
                            Sign In/Up
                        </button>
                    )
                }
            </div>
        </>
    );
}

const Content_1 = () => {
    return (
        <><div className='avatar'>
            <img src={session.user.image} width={100} height={100} />
        </div>
            <div className='contents'>
                <h4>{session.user.name}</h4>
                <p>{session.user.email}</p>

                <Link href='/sub'>
                    <a className={styles.btn}>See Listing</a>
                </Link>
            </div></>
    )
}

export default Navbar;