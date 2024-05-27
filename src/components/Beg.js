import React from 'react'
import Header from './Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

const Beg = () => {
    const cards = [
        {
            img: '/beg1.png',
            title: 'Prelude 8',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
       price: "$3.00"
        },
        {
            img: '/beg2.png',
            title: 'Prelude 4',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
       price: "$3.00"
        },
        {
            img: '/beg4.png',
            title: 'Just Curious',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
       price: "$3.00"
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
                    <div className='row'>
                        {cards.map((card, index) => (
                            <div key={index} className='cards col-lg-3 d-flex justify-content-center mt-1'>
                                <img src={card.img} className="img2" alt="..." />
                                <div className="d-flex align-items-center" style={{ position: "absolute", top: "90%" }}>
                                    <h5 className="text-light mx-5 title text-center">{card.title}</h5>
                                </div>
                                <div className="info">
                                    <Link to={`/card/${card.title}`} state={{ card }} className="button">View Now</Link>
                                </div>
                            </div>
                        ))}
                    </div>
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