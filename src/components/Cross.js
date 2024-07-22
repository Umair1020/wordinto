import React from 'react'
import Header from './Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Footer } from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive'

const Cross = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 651 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 650 })
        return isMobile ? children : null
    }
    const cross = [
        {
            img: '/cross1.png',
            title: 'Prelude 53 (Male)',
            para: 'Despite your insistence that everything is fine, I sense that something is troubling you. Can we freely talk about it?            ',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/cross4.png',
            title: 'Prelude 99 (Unisex)',
            para: 'It’s better that we break all ties with one another. Move on with your life!           ',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/cross3.png',
            title: 'Prelude 2 (Female)',
            para: 'I am receiving conflicting messages from you. One day you show affection by kissing and holding me, and the next you claim you are not looking to pursue a relationship with me.            ',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/cross5.png',
            title: 'Prelude 15 (Female)',
            para: 'All the indications suggest that you are being unfaithful to me.',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/cross6.png',
            title: 'Prelude 16 (Unisex)',
            para: 'The approaching wedding day has me concerned about the warning signs I ve noticed. Throughout our relationship, it has become clear that we are not well-matched. I believe we should see other people before making any permanent decisions.            ',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/cross7.png',
            title: 'Prelude 24 (Unisex)',
            para: 'I am unable to move past the fact that you cheated on me. Despite our efforts to fix things, I find it hard to trust you. Therefore, in order to spare you from my lack of trust, I have made the decision to leave.            ',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
    ];
    return (

        <div className='' style={{ background: "#000" }} >  <Helmet>
        <title>Into Words - Crossroad</title>
      </Helmet>
            <Desktop>
                <Header />
                <div className='beg'> <br />
                    <h2>SHOP BY CATEGORY</h2>
                    <h3>CROSSROAD</h3>
                </div>
                <div className='row'>
                    {cross.map((card, index) => (
                        <div key={index} className='cards col-lg-3 d-flex justify-content-center mt-1'>
                            <img src={card.img} className="img2" alt="..." />
                            <div className="d-flex align-items-center" style={{ position: "absolute", top: "100%" }}>
                                <h6 className="text-light mx-5 title text-center " style={{ marginTop: "-5vh" }}>{card.title}</h6>
                            </div>
                            <div className="info">
                                <Link to={`/card/${card.title}`} state={{ card }} className="button">View Now</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </Desktop>
            <Mobile>
                <Header />
                <div className='beg'> <br />
                    <h2>SHOP BY CATEGORY</h2>
                    <h3>CROSSROAD</h3>
                </div>
                <div className='container'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        style={{
                            '--swiper-navigation-color': '#fff',
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                price: "$6.00",
                                note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                                price: "$6.00",
                                note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                                price: "$6.00",
                                note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {cross.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className='cards'>
                                    <img src={card.img} class=" img2 " alt="..." />
                                    <div class=" d-flex align-items-center " style={{ position: "absolute", top: "90%" }} >
                                        <h5 class=" text-light  title text-start">{card.title}</h5>
                                        {/* <h5 class=" text-light mx-1 title text-center">{card.price}</h5> */}
                                    </div>
                                    <div className="info">
                                        <Link to={`/card/${card.title}`} onClick={() => handleLinkClick(`/card/${card.title}`)} state={{ card }} className="button">View Now</Link>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Footer />
            </Mobile>
        </div>
    )
}

export default Cross