import { Link, useLocation } from 'react-router-dom'

function NavTabs() {
    const currentPage = useLocation().pathname

    return (
        <ul className='nav nav-tabs'>           
            {/* About */}
            <li className='nav-item'>
                <Link to="/" 
                className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>
                About
                </Link>
            </li>
            {/* Projects */}
            <li className='nav-item'>
                <Link to="/Projects" 
                className={currentPage === '/Projects' ? 'nav-link-active' : 'nav-link'}>
                Projects
                </Link>
            </li>
            {/* Resume */}
            <li className='nav-item'>
                <Link to="/Resume" 
                className={currentPage === '/Resume' ? 'nav-link-active' : 'nav-link'}>
                Resume
                </Link>
            </li>
            {/* Contact */}
            <li className='nav-item'>
                <Link to="/Contact" 
                className={currentPage === '/Contact' ? 'nav-link-active' : 'nav-link'}>
                Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs