import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={36} height={36}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/provider_loc"><a>Provider Locator</a></Link>
            <Link href="/symptom_ck"><a>Symptom Checker</a></Link>
            <Link href="/more"><a>More</a></Link>
            <Link href="/login"><a>Login</a></Link>
        </nav>
     );
}
 
export default Navbar;