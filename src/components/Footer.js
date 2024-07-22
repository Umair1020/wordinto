import { useState } from "react"
import "../App.css"
import { Link , useNavigate } from "react-router-dom";
import Popupcard from "./Popupcard";

export const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const handleContactClick = () => {
        setShowPopup(true);
    };
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    return (
        <div><br />
            <footer class="footer">
                <div class="container">
                    <div class="row  ">
                        <h2 className='text-light fw-bold word '>INTO WORDS</h2>
                        <div className='mainfooter align-items-center'>
                            <div className='col-lg-3 mx-2'><p>
                            support@intowordsgc.com</p></div>
                            <div className='col-lg-8 col-sm-12 text-start'>  <nav className="navbars" style={{}}>
                                <ul className=' ul mt-3'>
                                    <li className='mx-2'><Link to="/"  onClick={() => handleLinkClick("/")}>Home</Link></li>
                                    <li className='mx-2'><Link to="/about"  onClick={() => handleLinkClick("/about")}>About</Link></li>
                                    <li className='mx-2'><Link to="/shop"  onClick={() => handleLinkClick("/shop")}>Shop</Link></li>
                                    <li className='mx-2'><Link to="/blog"  onClick={() => handleLinkClick("/blog")}>Blog</Link></li>
                                    <li className='mx-2'>
                                        <Link to="#contact" className=' d-flex justify-content-center' onClick={handleContactClick}>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                                {showPopup && <Popupcard onClose={handleClosePopup} />}
                                </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
