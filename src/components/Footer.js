import { useState } from "react"
import "../App.css"
import { Link } from "react-router-dom";
import Popupcard from "./Popupcard";

export const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleContactClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div><br />
            <footer class="footer">
                <div class="container">
                    <div class="row  ">
                        <h2 className='text-light fw-bold word '>INTO WORDS</h2>
                        <div className='mainfooter align-items-center'>
                            <div className='col-lg-3 mx-2'><p>Hampton USA <br />
                                jessaword@gmail.com<br />
                                (757) 998-1315</p></div>
                            <div className='col-lg-8 mx-3'>  <nav className="navbars" style={{}}>
                                <ul className=' ul mt-3'>
                                    <li className='mx-2'><a href="/">Home</a></li>
                                    <li className='mx-2'><a href="/about">About</a></li>
                                    <li className='mx-2'><a href="/shop">Shop</a></li>
                                    <li className='mx-2'><a href="/blog">Blog</a></li>
                                    <li className='mx-2'>
                                        <Link to="#contact" className=' d-flex justify-content-center' onClick={handleContactClick}>Contact</Link>
                                    </li>
                                </ul>
                            </nav>

                                {showPopup && <Popupcard onClose={handleClosePopup} />}</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
