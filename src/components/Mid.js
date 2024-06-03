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
            title: 'Prelude 81',
            para: 'Please understand that I am dealing with something that I am not ready to discuss. I will share it with you in due time, so please be patient.            ',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/mid3.png',
            title: 'Prelude 65',
            para: 'Your outer beauty initially caught my eye, but over time I discovered your inner beauty, which only enhanced my admiration for you.            ',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/mid6.png',
            title: 'Prelude 6',
            para: 'Expressing love is uncomfortable for me, even though I truly feel it. My upbringing did not include regularly saying those three words.            ',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/mid4.png',
            title: 'Prelude 1',
            para: 'I no longer have romantic feelings for my friend. How can I express this without hurting them? ',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },

        {
            img: '/mid1.png',
            title: 'Prelude 53',
            para: 'Despite your insistence that everything is fine, I sense that something is troubling you. Can we freely talk about it?            ',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/mid2.png',
            title: 'Prelude 5',
            para: 'Lets keep our disagreements private between us. When we make up, things will be fine, but others you involve may hold on to grudges.',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/mid8.png',
            title: 'Prelude 40',
            para: 'What happened to the flowers, the candy, the dates, and most importantly, the romance?            .',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
    ];

    return (
        <div className=' ' style={{ background: "#000" }} >
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
                            price: "$5.00",
                             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                            price: "$5.00",
                             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                            price: "$5.00",
                             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
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