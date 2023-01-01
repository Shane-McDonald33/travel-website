import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
    const [openLinks, setLinks] = useState(false);
    const toggleNavBar = () => {
        setLinks(!openLinks)
        if (openLinks) {
            return <CloseIcon/>;
        }
    };
    const closeMobileMenu = () => setLinks(false);
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
        </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar