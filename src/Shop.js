import React from 'react'
import Header from './components/Header/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Helmet } from 'react-helmet';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Footer } from './components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };
    const cards = [
        {
            img: '/beg1.png',
            title: 'Prelude 8 (Male)',
            para: 'I hope that my honesty doesn’t offend you, but you wear too much makeup. There’s nothing wrong with enhancing yourself, but your natural beauty is more radiant. Whenever I hug you, I get smudges on my shirt, and every time I kiss you, I have to wipe my lips because of the lipstick.            ',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/beg2.png',
            title: 'Prelude 4 (Female)',
            para: 'You were not dishonest. Although you did send me a text, you did not actually hit the "send" button. Additionally, you did try to call me, but the phone only rang once before you ended the call.            If you dont want to be with me be honest by telling me plainly.',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },
        {
            img: '/beg4.png',
            title: 'Just Curious (Male)',
            para: 'I would like to get to know you more, but without any pressure            .',
            price: "$6.00",
            note: "Note: The description provided does not reflect the actual content of the card, it merely describes what is contained inside."
        },

    ];
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
        <>
            <div className=' ' style={{ background: "#000" }} >
                <Helmet>
                    <title>Into Words - Shop</title>
                </Helmet>
                <Header />
                <div className='beg'> <br />
                    <h2>SHOP US NOW</h2>
                    <h5 className=''>Greeting Cards</h5>
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
                <div className='beg'> <br />

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
            </div>
        </>
    )
}

export default Shop