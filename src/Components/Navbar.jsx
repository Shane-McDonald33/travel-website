import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
//import CloseIcon from '@mui/icons-material/Close';
import { Button } from './Button';
import '../Styles/Navbar.css';

function Navbar() {
    const [openLinks, setLinks] = useState(false);
    const [button, setButton] = useState(true);
    const toggleNavBar = () => {
        setLinks(!openLinks)
    };
    const closeMobileMenu = () => setLinks(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
        <Link to='/' className="navbar-logo">
            TRVL
        </Link>
        <div className='menu-icon' id={openLinks ? "open" : "close"}>
            <button onClick={toggleNavBar}>
                <ReorderIcon/>
            </button>
        </div>
        <ul className={openLinks ? 'nav-menu avtive' : 'nav-menu'}>
            <li className='nav-iem'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-iem'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-iem'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-iem'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign-Up
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
    </nav>
    </>
  );
}

export default Navbar