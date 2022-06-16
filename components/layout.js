
import NavBar from '../components/navBar'
import Footer from '../components/footer'

const Layout = ({ children }) => {
    return (
        <div className='content'>
            <NavBar/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout