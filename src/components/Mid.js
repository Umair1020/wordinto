import React from 'react'
import Header from './Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Footer } from './Footer';
import { Link , useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet';

const Mid = () => {
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
    const middle = [
        {
            img: '/mid7.png',
            title: 'Prelude 81 (Unisex)',
            para: 'Please understand that I am dealing with something that I am not ready to discuss. I will share it with you in due time, so please be patient.            ',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/mid3.png',
            title: 'Prelude 65  (Male)',
            para: 'Your outer beauty initially caught my eye, but over time I discovered your inner beauty, which only enhanced my admiration for you.            ',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/mid6.png',
            title: 'Prelude 6 (Unisex)',
            para: 'Expressing love is uncomfortable for me, even though I truly feel it. My upbringing did not include regularly saying those three words.            ',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/mid4.png',
            title: 'Prelude 1 (Unisex)',
            para: 'I no longer have romantic feelings for my friend. How can I express this without hurting them? ',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },

        {
            img: '/mid1.png',
            title: 'Prelude 53 (Male)',
            para: 'Despite your insistence that everything is fine, I sense that something is troubling you. Can we freely talk about it?            ',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/mid2.png',
            title: 'Prelude 5 (Unisex)',
            para: 'Lets keep our disagreements private between us. When we make up, things will be fine, but others you involve may hold on to grudges.',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/mid8.png',
            title: 'Prelude 40 (Female)',
            para: 'What happened to the flowers, the candy, the dates, and most importantly, the romance?            .',
            price: "$6.00",
             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
    ];

    return (
        <div className=' ' style={{ background: "#000" }} >
              <Helmet>
        <title>Into Words - Middle</title>
      </Helmet>
            <Desktop>
                <Header />
                <div className='beg'> <br />
                    <h2>SHOP BY CATEGORY</h2>
                    <h3>Middle</h3>
                </div>
                <div className='row'>
                    {middle.map((card, index) => (
                        <div className='cards col-lg-3 d-flex justify-content-center mt-1'>
                            <img src={card.img} class=" img2 " alt="..." />
                            <div class=" d-flex align-items-center " style={{ position: "absolute", top: "90%" }}>
                                <h5 class=" text-light mx-5 title text-center">{card.title}</h5>
                            </div>
                            <div className="info">
                            <Link to={`/card/${card.title}`} onClick={() => handleLinkClick(`/card/${card.title}`)} state={{ card }} className="button">View Now</Link>
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
                    <h3>Middle</h3>
                </div>
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
                            price: "6.00",
                             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                            price: "6.00",
                             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                            price: "6.00",
                             note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
                        },
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {middle.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className='cards'>
                                <img src={card.img} class=" img2 " alt="..." />
                                <div class=" d-flex align-items-center " style={{ position: "absolute", top: "90%" }}>
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
                <Footer />
            </Mobile>
        </div>
    )
}

export default Mid