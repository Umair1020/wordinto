import React, { useEffect } from 'react'
import Header from './Header/Header'
import $ from 'jquery';
import 'jquery-scrollify';
import { useMediaQuery } from 'react-responsive';
import 'animate.css';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

AOS.init();


const Main = () => {
    const cards = [
        {
            img: '/beg1.png',
            title: 'Prelude 8',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/beg2.png',
            title: 'Prelude 4',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/beg4.png',
            title: 'Just Curious',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },

    ];
    const middle = [
        {
            img: '/mid7.png',
            title: 'Prelude 81',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/mid3.png',
            title: 'Prelude 65',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/mid6.png',
            title: 'Prelude 6',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/mid4.png',
            title: 'Prelude 1',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },

        {
            img: '/mid1.png',
            title: 'Prelude 3',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/mid2.png',
            title: 'Prelude 5',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
    ];
    const cross = [
        {
            img: '/cross1.png',
            title: 'Prelude 53',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/cross4.png',
            title: 'Prelude 99',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/cross3.png',
            title: 'Prelude 2',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
        {
            img: '/cross5.png',
            title: 'Prelude 15',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            price: "$3.00"
        },
    ];
    // useEffect(() => {
    //     const elements = {
    //         scrollify: $('.js--scrollify'),
    //         header: $('.js--header'),
    //         footer: $('.js--footer'),
    //         navigate: $('.js--navigate'),
    //         navigateItems: $('.js--navigate-items'),
    //         navigateLink: $('.js--navigate-link'),
    //         firstTitle: $('.js--first-title'),
    //         third: $('.js--third'),
    //         thirdTitle: $('.js--third-title'),
    //         thirdLeft: $('.js--third-left'),
    //         thirdRight: $('.js--third-right'),
    //         sectionCard: $('.js--section-card'),
    //         block: $('.js--block'),
    //         more: $('.js--more'),
    //     };

    //     elements.navigateItems.on('click', '.js--navigate-link', (ev) => {
    //         ev.preventDefault();

    //         const $this = $(ev.currentTarget);
    //         const hash = $this.attr('href');

    //         $.scrollify.move(hash);
    //     });

    //     elements.more.on('click', (ev) => {
    //         elements.block.slideToggle();
    //     });

    //     setTimeout(() => {
    //         elements.firstTitle.addClass('animate__animated animate__bounceInDown');
    //     }, 100);

    //     $.scrollify({
    //         section: '.js--scrollify',
    //         sectionName: 'section-name',
    //         overflowScroll: false,
    //         setHeights: true,
    //         interstitialSection: '.footer, .section__fourth',
    //         standardScrollElements: '.footer',
    //         before(index, sections) {
    //             const ref = sections[index].data('section-name');

    //             if (ref === 'first' || ref === 'footer') {
    //                 elements.header.removeClass('is--active');
    //                 elements.firstTitle.addClass('animate__animated animate__bounceInDown');
    //             }

    //             if (ref === 'second') {
    //                 setTimeout(function () {
    //                     elements.sectionCard.addClass('animate__animated animate__flipInY');
    //                 }, 100);
    //             }

    //             if (ref === 'third') {
    //                 elements.third.removeClass('is--inactive');
    //                 elements.thirdLeft.addClass('animate__animated animate__fadeInLeft');
    //                 elements.thirdRight.addClass('animate__animated animate__fadeInRight');
    //                 elements.thirdTitle.addClass('animate__animated animate__bounceInDown');
    //             }

    //             if (ref === 'footer') {
    //                 elements.navigate.addClass('is--inactive');
    //             } else {
    //                 elements.navigate.removeClass('is--inactive');
    //             }

    //             elements.navigateLink
    //                 .parent()
    //                 .siblings()
    //                 .find('.js--navigate-link')
    //                 .removeClass('is--active');
    //             elements.navigateLink.eq(index).addClass('is--active');
    //         },
    //         after(index, sections) {
    //             const ref = sections[index].data('section-name');

    //             if (ref !== 'second') {
    //                 elements.sectionCard.removeClass('animate__animated animate__flipInY');
    //             }

    //             if (ref === 'third') {
    //                 elements.thirdLeft.removeClass('animate__animated animate__fadeInLeft');
    //                 elements.thirdRight.removeClass('animate__animated animate__fadeInRight');
    //                 elements.thirdTitle.removeClass('animate__animated animate__bounceInDown');
    //             }

    //             if (ref !== 'third') {
    //                 elements.third.addClass('is--inactive');
    //             }

    //             if (ref !== 'first' && ref !== 'footer') {
    //                 elements.header.addClass('is--active');
    //                 elements.firstTitle.removeClass('animate__animated animate__bounceInDown');
    //             }
    //         },
    //         afterRender() { },
    //     });
    // }, []);

    // useEffect(() => {
    //     const elements = document.querySelectorAll('.animate-on-scroll');

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('animate__animated');
    //                 entry.target.classList.add(entry.target.dataset.animation);
    //                 observer.unobserve(entry.target);
    //             }
    //         });
    //     });

    //     elements.forEach(element => {
    //         observer.observe(element);
    //     });

    //     return () => {
    //         if (observer) {
    //             observer.disconnect();
    //         }
    //     };
    // }, []);
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
            <Desktop>
                <div className='bg-dark' style={{ backgroundColor: "#111111", height: "auto" }}>

                    <figure>
                        <section class="section__first is--scrolled js--scrollify video-section" data-section-name="first">
                            {/* <video className="background-video" autoPlay muted loop>
                        <source src="/words.mp4" type="video/mp4" />

                    </video> */}
                            <img
                                id="second-img"
                                src="/banner.png"
                                className='w-100 h-75'
                            />
                            <div className="overlay">
                                <br />
                                <Header />
                                <br /><br /><br /><br />
                                <div className="middle-section">
                                    <h2>INTO WORDS</h2>
                                    <button className="button">Greeting Cards</button>
                                </div>
                            </div>
                        </section>
                    </figure>
                    <figure>
                        <section className="section__first is--scrolled js--scrollify" data-section-name="second">
                            <div className="row" id="inner">


                                <div className="col-lg-12 d-flex justify-content-center mx-auto " data-aos="fade-up" data-aos-duration="2000" style={{ marginTop: "-30px" }}>
                                    <img
                                        id="first-img"
                                        className="d-flex justify-content-center mx-auto img animate__animated animate__flip"
                                        data-rotate-x="90deg"
                                        data-move-z="-500px"
                                        data-move-y="200px"
                                        src="/beg1.png"
                                    />


                                </div>
                                <div className="col-lg-4" data-aos="fade-up-right"
                                    data-aos-duration="2000">
                                    <img
                                        id="second-img"
                                        src="/beg5.png"
                                        style={{ width: "450px", marginTop: "-400px" }}
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <div className="begin" data-aos="zoom-in-down" data-aos-duration="1000"
                                    >
                                        <h4 className="text-center">BEGINNING</h4>
                                        <Link to="/begning" style={{ listStyle: "none", textDecoration: "none" }}>  <div className="d-flex align-items-center justify-content-center">
                                            <button className="shop mx-auto">Shop Now</button>
                                        </div></Link>
                                    </div>
                                    <br />
                                    <div className="desc" data-aos="fade-down" data-aos-duration="1000">
                                        <p className="para2">
                                            The point in time or space at which something starts. <br /> <br />
                                            Two people getting to know each other. The beginning stage: the couple can’t get enough of each other: they stay on the phone together all night, cannot wait to get in each other’s presence; flowers, butterflies, dates and dinners
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-aos="fade-up-left"
                                    data-aos-duration="2000">
                                    <img
                                        id="third-img"
                                        src="/beg2.png"
                                        className="img mx-5"
                                        data-move-x="-500px"
                                        data-rotate="90deg"
                                        style={{ marginTop: "-100px" }}
                                    />
                                </div>
                            </div>

                        </section>

                    </figure>


                    <figure>
                        <section class="section__third is--scrolled js--scrollify js--third" data-section-name="third">
                            <div className='row'>
                                <div className='col-lg-4 d-flex jusfify-content-center mx-auto mt-5 ' data-aos="fade-up-left"
                                    data-aos-duration="2000" >
                                    <img className='d-flex jusfify-content-center img mx-auto' src='/mid1.png' />
                                </div>
                                <div className='col-lg-4 ' data-aos="fade-up" data-aos-duration="2000" style={{ marginTop: "-30px" }}>
                                    <img src='/mid3.png' className='img' style={{ marginLeft: "0px" }} />
                                </div>
                                <div className='col-lg-4  mt-5 ' data-aos="fade-up-right"
                                    data-aos-duration="2000">
                                    <img src='/mid6.png' className='img' />
                                </div>
                                <div className='col-lg-4 data-aos="fade-up-left"
                                    data-aos-duration="2000"' style={{ marginTop: "-40px" }}>
                                    <img src='/mid2.png' className='img' />
                                </div>


                                <div className='col-lg-4   '>
                                    <div className='begin ' data-aos="zoom-in-down" data-aos-duration="1000" style={{ marginTop: "-100px" }}>
                                        <h4 className='text-center'>Middle</h4>
                                        {/* <Link to="/middle" style={{ listStyle: "none", textDecoration: "none" }}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button className='shop mx-auto'>Shop Now</button>
                                    </div>
                                </Link> */}
                                        <Link to="/middle" style={{ listStyle: "none", textDecoration: "none" }}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className='shop mx-auto'>Shop Now</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <br />
                                    <div className='desc ' data-aos="fade-down" data-aos-duration="1000" style={{ marginTop: "-10px" }}>

                                        <p className='para2'>The point or position at an equal distance from the sides, edges, or ends of something. <br /> <br />

                                            In the middle stage, the real person emerges.  The couple is in a committed relationship, yet there are disagreements and misunderstandings. They do not plan to end the relationship, but communicate and come to an agreement.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-lg-4  ' data-aos="fade-up-right"
                                    data-aos-duration="2000" >
                                    <img src='/mid5.png' className='img' style={{
                                        marginTop: "-260px",
                                        height: "504px",
                                        marginLeft: "-202px"
                                    }} />
                                </div>
                            </div>
                        </section>
                    </figure>


                    <figure>
                        <section class="section__fourth is--scrolled js--scrollify" data-section-name="fourth">
                            <div className='row'>
                                {/* <div className='col-lg-4  '>
      <img src='/mid3.png' className='img'  />
  </div> */}
                                <div className='col-lg-4 d-flex jusfify-content-center mx-auto mt-5' data-aos="fade-up-left"
                                    data-aos-duration="2000">
                                    <img className='d-flex jusfify-content-center mx-auto img ' src='/cross1.png' />
                                </div>
                                <div className='col-lg-4' data-aos="fade-up" data-aos-duration="2000" style={{

                                    marginTop: "-30px"
                                }}>
                                    <img src='/cross4.png' className=' img  ' />
                                </div>
                                <div className='col-lg-4  ' data-aos="fade-up-right"
                                    data-aos-duration="2000"  >
                                    <img src='/cross3.png' className='img mt-5' />
                                </div>
                                <div className='col-lg-4  ' data-aos="fade-up-left"
                                    data-aos-duration="2000" >
                                    <img src='/cross2.png' className='img mx-5' style={{
                                        marginTop: "-254px",
                                        height: "504px",

                                    }} />
                                </div>

                                <div className='col-lg-4  ' style={{

                                    marginTop: "-0px"
                                }} >
                                    <div className='begins' data-aos="zoom-in-down" data-aos-duration="1000">
                                        <h4 className='text-center'>CROSSROAD</h4>
                                        <Link to="/crossroad" style={{ listStyle: "none", textDecoration: "none" }}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className='shop mx-auto'>Shop Now</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <br />   <br />
                                    <div className='desc' data-aos="fade-down" data-aos-duration="1000" style={{ marginTop: "-40px" }}>

                                        <p className='para2'>A crucial point especially where a decision must be made. <br /> <br />

                                            The couple is in a committed relationship and comes to a place that may be detrimental to their bond; infidelity, abuse, unexpected turns, lies, and dark secrets.
                                            The couple makes a decision to work things out or end the relationship.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4  ' data-aos="fade-up-right"
                                    data-aos-duration="2000" style={{

                                        marginTop: "-50px"
                                    }} >
                                    <img src='/cross5.png' className='img ' />
                                </div>

                            </div>
                        </section>
                    </figure>
                    {/* <Footer /> */}
                </div>
            </Desktop>
            <Mobile>
                <div className='bg-dark' style={{ backgroundColor: "#111111", height: "auto" }}>

                    <figure>
                        <section class="section__first is--scrolled js--scrollify video-section" data-section-name="first">
                            {/* <video className="background-video" autoPlay muted loop>
            <source src="/words.mp4" type="video/mp4" />

        </video> */}
                            <img
                                id="second-img"
                                src="/banner.png"
                                className='w-100 ' style={{ height: "60vh" }}
                            />
                            <div className="overlay">
                                <br />
                                <Header />
                                <br /><br />
                                <div className="middle-section">
                                    <h2>INTO  <br />WORDS</h2>
                                    <button className="button">Greeting Cards</button>
                                </div>
                            </div>
                        </section>
                    </figure>
                    <figure>
                        <section className="section__first is--scrolled js--scrollify" data-section-name="second">
                            <div className="row" id="inner">
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
                                            price: "$3.00"
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                            price: "$3.00"
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                            price: "$3.00"
                                        },
                                    }}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    {cards.map((card, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='cards'>
                                                <img src={card.img} class=" img2 " alt="..." />

                                                <div className="info">
                                                    <Link to={`/card/${card.title}`} state={{ card }} className="button">View Now</Link>
                                                </div>                                </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* <div className="col-lg-12 d-flex justify-content-center mx-auto " data-aos="fade-up" data-aos-duration="2000" style={{ marginTop: "-30px" }}>
                                    <img
                                        id="first-img"
                                        className="d-flex justify-content-center mx-auto img animate__animated animate__flip"
                                        data-rotate-x="90deg"
                                        data-move-z="-500px"
                                        data-move-y="200px"
                                        src="/beg1.png"
                                    />


                                </div>
                                <div className="col-lg-4" data-aos="fade-up-right"
                                    data-aos-duration="2000">
                                    <img
                                        id="second-img"
                                        src="/beg5.png"
                                        style={{ width: "450px", marginTop: "-400px" }}
                                    />
                                </div> */}
                                <div className="col-lg-4">
                                    <div className="begin" data-aos="zoom-in-down" data-aos-duration="1000"
                                    >
                                        <h4 className="text-center">BEGINNING</h4>
                                        <Link to="/begning" style={{ listStyle: "none", textDecoration: "none" }}>  <div className="d-flex align-items-center justify-content-center">
                                            <button className="shop mx-auto">Shop Now</button>
                                        </div></Link>
                                    </div>
                                    <br />
                                    <div className="desc" data-aos="fade-down" data-aos-duration="1000">
                                        <p className="para2">
                                            The point in time or space at which something starts. <br /> <br />
                                            Two people getting to know each other. The beginning stage: the couple can’t get enough of each other: they stay on the phone together all night, cannot wait to get in each other’s presence; flowers, butterflies, dates and dinners
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4" data-aos="fade-up-left"
                                    data-aos-duration="2000">
                                    <img
                                        id="third-img"
                                        src="/beg2.png"
                                        className="img mx-5"
                                        data-move-x="-500px"
                                        data-rotate="90deg"
                                        style={{ marginTop: "-100px" }}
                                    />
                                </div> */}
                            </div>
                        </section>
                    </figure>


                    <figure>
                        <section class="section__third is--scrolled js--scrollify js--third" data-section-name="third">
                            <div className='row'>
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
                                            price: "$3.00"
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                            price: "$3.00"
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                            price: "$3.00"
                                        },
                                    }}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    {middle.map((card, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='cards'>
                                                <img src={card.img} class=" img2 " alt="..." />

                                                <div className="info">
                                                    <Link to={`/card/${card.title}`} state={{ card }} className="button">View Now</Link>
                                                </div>                                </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className='col-lg-4   '><br /><br />
                                    <div className='begin ' data-aos="zoom-in-down" data-aos-duration="1000" style={{ marginTop: "-100px" }}>
                                        <h4 className='text-center'>Middle</h4>
                                        {/* <Link to="/middle" style={{ listStyle: "none", textDecoration: "none" }}>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className='shop mx-auto'>Shop Now</button>
                        </div>
                    </Link> */}
                                        <Link to="/middle" style={{ listStyle: "none", textDecoration: "none" }}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className='shop mx-auto'>Shop Now</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <br />
                                    <div className='desc ' data-aos="fade-down" data-aos-duration="1000" style={{ marginTop: "-10px" }}>

                                        <p className='para2'>The point or position at an equal distance from the sides, edges, or ends of something. <br /> <br />

                                            In the middle stage, the real person emerges.  The couple is in a committed relationship, yet there are disagreements and misunderstandings. They do not plan to end the relationship, but communicate and come to an agreement.
                                        </p>
                                    </div>
                                </div>
                                {/* <div className='col-lg-4  ' data-aos="fade-up-right"
                                    data-aos-duration="2000" >
                                    <img src='/mid5.png' className='img' style={{
                                        marginTop: "-260px",
                                        height: "504px",
                                        marginLeft: "-202px"
                                    }} />
                                </div> */}
                            </div>
                        </section>
                    </figure>


                    <figure>
                        <section class="section__fourth is--scrolled js--scrollify" data-section-name="fourth">
                            <div className='row'>
                                {/* <div className='col-lg-4  '>
<img src='/mid3.png' className='img'  />
</div> */}
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
                                            price: "$3.00"
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                            price: "$3.00"
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                            price: "$3.00"
                                        },
                                    }}
                                    modules={[Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                    {cross.map((card, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='cards'>
                                                <img src={card.img} class=" img2 " alt="..." />

                                                <div className="info">
                                                    <Link to={`/card/${card.title}`} state={{ card }} className="button">View Now</Link>
                                                </div>                                </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className='col-lg-4  ' style={{

                                    marginTop: "-0px"
                                }} >
                                    <div className='begins' data-aos="zoom-in-down" data-aos-duration="1000">
                                        <h4 className='text-center'>CROSSROAD</h4>
                                        <Link to="/crossroad" style={{ listStyle: "none", textDecoration: "none" }}>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button className='shop mx-auto'>Shop Now</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <br />   <br />
                                    <div className='desc' data-aos="fade-down" data-aos-duration="1000" style={{ marginTop: "-40px" }}>

                                        <p className='para2'>A crucial point especially where a decision must be made. <br /> <br />

                                            The couple is in a committed relationship and comes to a place that may be detrimental to their bond; infidelity, abuse, unexpected turns, lies, and dark secrets.
                                            The couple makes a decision to work things out or end the relationship.</p>
                                    </div>
                                </div>
                                {/* <div className='col-lg-4  ' data-aos="fade-up-right"
                                    data-aos-duration="2000" style={{

                                        marginTop: "-50px"
                                    }} >
                                    <img src='/cross5.png' className='img ' />
                                </div> */}

                            </div>
                        </section>
                    </figure>
                    <Footer />
                </div>
            </Mobile>
        </>
    );
};

export default Main;