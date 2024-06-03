import React from 'react'
import Header from './Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Footer } from './Footer';
import { Link , useNavigate } from 'react-router-dom';

const Beg = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const cards = [
        {
            img: '/beg1.png',
            title: 'Prelude 8',
            para: 'I hope that my honesty doesn’t offend you, but you wear too much makeup. There’s nothing wrong with enhancing yourself, but your natural beauty is more radiant. Whenever I hug you, I get smudges on my shirt, and every time I kiss you, I have to wipe my lips because of the lipstick.            ',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/beg2.png',
            title: 'Prelude 4',
            para: 'You were not dishonest. Although you did send me a text, you did not actually hit the "send" button. Additionally, you did try to call me, but the phone only rang once before you ended the call.            If you dont want to be with me be honest by telling me plainly.',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },
        {
            img: '/beg4.png',
            title: 'Just Curious',
            para: 'I would like to get to know you more, but without any pressure            .',
            price: "$5.00",
             note: "Note: The above mentioned description is not the content in the card, it just describes the content inside the card."
        },

    ];

    // const middle = [
    //     {
    //         img: '/mid7.png',
    //         title: 'Prelude 81',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/mid3.png',
    //         title: 'Prelude 65',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/mid6.png',
    //         title: 'Prelude 6',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/mid4.png',
    //         title: 'Prelude 1',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },

    //     {
    //         img: '/mid1.png',
    //         title: 'Prelude 3',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/mid2.png',
    //         title: 'Prelude 5',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    // ];
    // const cross = [
    //     {
    //         img: '/cross1.png',
    //         title: 'Prelude 53',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/cross4.png',
    //         title: 'Prelude 99',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/cross3.png',
    //         title: 'Prelude 2',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    //     {
    //         img: '/cross5.png',
    //         title: 'Prelude 15',
    //         para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //     },
    // ];

    return (
        <>
            <div className=' ' style={{ background: "#000" }} >
                <Header />
                <div className='beg'> <br />
                    <h2>SHOP BY CATEGORY</h2>

                    <h3>BEGINNING</h3>
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
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className='cards'>
                                    <img src={card.img} class=" img2 " alt="..." />
                                    <div class=" d-flex align-items-center " style={{ position: "absolute", top: "90%" }} >
                                        <h5 class=" text-light  title text-start">{card.title}</h5>
                                        {/* <h5 class=" text-light mx-1 title text-center">{card.price}</h5> */}
                                    </div>
                                    <div className="info">
                                        <Link to={`/card/${card.title}`} onClick={() => handleLinkClick(`/card/${card.title}`)} state={{ card }} className="button">View Now</Link>
                                    </div>                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className='beg'> <br />

                    <h3>Middle</h3>
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
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {middle.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className='cards'>
                                    <img src={card.img} class=" img2 " alt="..." />
                                    <div class=" d-flex align-items-center "  style={{position: "absolute", top: "90%"}}>
                                        <h5 class=" text-light mx-5 title text-center">{card.title}</h5>
                                      
                                    </div>
                                    <div class="info">
                                    <a href="#" className="button ">View Now</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='beg'> <br />
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
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {cross.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className='cards'>
                                    <img src={card.img} class=" img2 " alt="..." />
                                    <div class=" d-flex align-items-center " style={{position: "absolute", top: "90%"}} >
                                        <h5 class=" text-light mx-5 title text-center">{card.title}</h5>
                                      
                                    </div>
                                    <div class="info">
                                    <a href="#" className="button ">View Now</a>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}

                <Footer />
            </div>
        </>
    )
}

export default Beg