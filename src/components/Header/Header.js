import React, { useState } from 'react';
import '../../App.css';
import Popupcard from "../Popupcard";
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleContactClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

  return (
    <>
    {/* <Mobile>
 
      </Mobile>
      <Desktop> */}

    
      <header>
        <div className="top-section">
          <img src="/logo.svg" alt="Logo" className="logo d-flex mx-auto" />
          <nav className="header navbar navbar-expand-lg">
            <ul className="navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li className="nav-item dropdown">
                <Link to="/shop" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Shop
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/begning" className="dropdown-item">Beginning</Link>
                  <Link to="/middle" className="dropdown-item">Middle</Link>
                  <Link to="/crossroad" className="dropdown-item">Crossroad</Link>
                </div>
              </li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className='contact text-dark'>
                <Link to="#contact" className='text-dark d-flex justify-content-center' onClick={handleContactClick}>Contact</Link>
              </li>
            </ul>
          </nav>

          {showPopup && <Popupcard onClose={handleClosePopup} />}
        </div>
      </header>
      {/* </Desktop> */}
    </>
  );
};

export default Header;
