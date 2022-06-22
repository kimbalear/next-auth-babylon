import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Home.module.css'
import { useState } from "react";

const Navbar = () => {
    const { data: session, status } = useSession()

    const [toggleAvatar, settoggleAvatar] = useState(false)
    const [toggleViewMode, settoggleViewMode] = useState(false)
    const [toggleMenu, settoggleMenu] = useState(false)

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
                            <img src={session.user.image} width={36} height={36} onClick={() => settoggleAvatar(!toggleAvatar)} />
                        ) : (
                            <>{/*<button onClick={() => signIn('github')}>
                                Sign In/Up
                            </button> */}
                                <Link href="/login">
                                    <button>
                                        Sign In/Up
                                    </button>
                                </Link>
                            </>
                        )
                    }
                </div>
                <div className='lng' onClick={() => settoggleViewMode(!toggleViewMode)}>
                    {toggleViewMode ? (
                        <Image src='/flag_en.png' width={24} height={16} />
                    ) : (
                        <Image src='/flag_vn.png' width={24} height={16} />
                    )}
                </div>
                <div className='menu' onClick={() => settoggleMenu(!toggleMenu)}>
                    {toggleMenu ? (
                        <Image src='/close.png' width={24} height={24} />
                    ) : (
                        <Image src='/menu.png' width={24} height={24} />
                    )}

                </div>

            </div>

            {
                session ? (
                    <>
                        {toggleAvatar ? (
                            <div className='card_user' >
                                <div className='avatar'>
                                    <img src={session.user.image} width={100} height={100} />
                                </div>
                                <div className='contents'>
                                    <h4>{session.user.name}</h4>
                                    <p>{session.user.email}</p>

                                    {/*<Link href='/sub'>
                                            <a className={styles.btn}>See Listing</a>
                                    </Link>*/}

                                    <button onClick={() => signOut()}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (<></>)}
                    </>
                ) : (
                    <></>
                )
            }
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