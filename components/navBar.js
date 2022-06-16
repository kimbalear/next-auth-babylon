import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Logo list</h1>
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