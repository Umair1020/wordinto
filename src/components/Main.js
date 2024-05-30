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
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from './Footer';

AOS.init();


const Main = () => {
    const navigate = useNavigate();
    const cards = [
        {
            img: '/beg1.png',
            title: 'Prelude 8',
            para: 'I hope that my honesty doesn’t offend you, but you wear too much makeup. There’s nothing wrong with enhancing yourself, but your natural beauty is more radiant. Whenever I hug you, I get smudges on my shirt, and every time I kiss you, I have to wipe my lips because of the lipstick.            ',
            price: "$3.00"
        },
        {
            img: '/beg2.png',
            title: 'Prelude 4',
            para: 'You were not dishonest. Although you did send me a text, you did not actually hit the "send" button. Additionally, you did try to call me, but the phone only rang once before you ended the call.            If you dont want to be with me be honest by telling me plainly.',
            price: "$3.00"
        },
        {
            img: '/beg4.png',
            title: 'Just Curious',
            para: 'I would like to get to know you more, but without any pressure            .',
            price: "$3.00"
        },

    ];
    const middle = [
        {
            img: '/mid7.png',
            title: 'Prelude 81',
            para: 'Please understand that I am dealing with something that I am not ready to discuss. I will share it with you in due time, so please be patient.            ',
            price: "$3.00"
        },
        {
            img: '/mid3.png',
            title: 'Prelude 65',
            para: 'Your outer beauty initially caught my eye, but over time I discovered your inner beauty, which only enhanced my admiration for you.            ',
            price: "$3.00"
        },
        {
            img: '/mid6.png',
            title: 'Prelude 6',
            para: 'Expressing love is uncomfortable for me, even though I truly feel it. My upbringing did not include regularly saying those three words.            ',
            price: "$3.00"
        },
        {
            img: '/mid4.png',
            title: 'Prelude 1',
            para: 'I no longer have romantic feelings for my friend. How can I express this without hurting them? ',
            price: "$3.00"
        },

        {
            img: '/mid1.png',
            title: 'Prelude 53',
            para: 'Despite your insistence that everything is fine, I sense that something is troubling you. Can we freely talk about it?            ',
            price: "$3.00"
        },
        {
            img: '/mid2.png',
            title: 'Prelude 5',
            para: 'Lets keep our disagreements private between us. When we make up, things will be fine, but others you involve may hold on to grudges.',
            price: "$3.00"
        },
        {
            img: '/mid8.png',
            title: 'Prelude 40',
            para: 'What happened to the flowers, the candy, the dates, and most importantly, the romance?            .',
            price: "$3.00"
        },
    ];
    const cross = [
        {
            img: '/cross1.png',
            title: 'Prelude 53',
            para: 'Despite your insistence that everything is fine, I sense that something is troubling you. Can we freely talk about it?            ',
            price: "$3.00"
        },
        {
            img: '/cross4.png',
            title: 'Prelude 99',
            para: 'It’s better that we break all ties with one another. Move on with your life!           ',
            price: "$3.00"
        },
        {
            img: '/cross3.png',
            title: 'Prelude 2',
            para: 'I am receiving conflicting messages from you. One day you show affection by kissing and holding me, and the next you claim you are not looking to pursue a relationship with me.            ',
            price: "$3.00"
        },
        {
            img: '/cross5.png',
            title: 'Prelude 15',
            para: 'All the indications suggest that you are being unfaithful to me.',
            price: "$3.00"
        },
        {
            img: '/cross6.png',
            title: 'Prelude 16',
            para: 'The approaching wedding day has me concerned about the warning signs I ve noticed. Throughout our relationship, it has become clear that we are not well-matched. I believe we should see other people before making any permanent decisions.            ',
            price: "$3.00"
        },
        {
            img: '/cross7.png',
            title: 'Prelude 24',
            para: 'I am unable to move past the fact that you cheated on me. Despite our efforts to fix things, I find it hard to trust you. Therefore, in order to spare you from my lack of trust, I have made the decision to leave.            ',
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
        const isDesktop = useMediaQuery({ minWidth: 651 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 650 })
        return isMobile ? children : null
    }

    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

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
                                className='w-100 h-100'
                            />
                            <div className="overlay">
                                <br />
                                <Header />
                                <br /><br /><br /><br />
                                <div className="middle-section">
                                    <h2>INTO WORDS</h2>
                                    <Link to="/shop" onClick={() => handleLinkClick("/shop")} style={{ listStyle: "none", textDecoration: "none" }}>   <button className="button">Greeting Cards</button> </Link>
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
                                        <Link to="/begning" onClick={() => handleLinkClick("/begning")} style={{ listStyle: "none", textDecoration: "none" }}>  <div className="d-flex align-items-center justify-content-center">
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
                                        <Link to="/middle" onClick={() => handleLinkClick("/middle")} style={{ listStyle: "none", textDecoration: "none" }}>
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
                                        <Link to="/crossroad" onClick={() => handleLinkClick("/crossroad")} style={{ listStyle: "none", textDecoration: "none" }}>
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
                                className='w-100 ' style={{ height: "65vh" }}
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
                                                    <Link to={`/card/${card.title}`} onClick={() => handleLinkClick(`/card/${card.title}`)} state={{ card }} className="button">View Now</Link>
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
                                <div className="col-lg-4"> <br /><br />
                                    <div className="begin" data-aos="zoom-in-down" data-aos-duration="1000"
                                    >
                                       
                                        <h4 className="text-center">BEGINNING</h4>
                                        <Link to="/begning" onClick={() => handleLinkClick("/begning")} style={{ listStyle: "none", textDecoration: "none" }}>  <div className="d-flex align-items-center justify-content-center">
                                            <button className="shop mx-auto">Shop Now</button>
                                        </div></Link>
                                    </div>
                                    <br />
                                    <div className="desc" data-aos="fade-down" data-aos-duration="1000">
                                        <p className="para2">
                                            The point in time or space at which something starts. <br /> <br />
                                            Two people getting to know each other. The beginning stage: the couple can’t get enough of each other: they stay on the phone together all night, cannot wait to get in each other’s presence; flowers, butterflies, dates and dinners
                                        </p>
                                        <br />
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
                                            <br />
                                            <div className='cards'> 
                                                <img src={card.img} class=" img2 " alt="..." />

                                                <div className="info">
                                                    <Link to={`/card/${card.title}`} onClick={() => handleLinkClick(`/card/${card.title}`)} state={{ card }} className="button">View Now</Link>
                                                </div>                                </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className='col-lg-4   '><br /><br /><br /><br /><br /><br />
                                   <div className='begin ' data-aos="zoom-in-down" data-aos-duration="1000" style={{ marginTop: "-100px" }}>
                                        <h4 className='text-center'>Middle</h4>
                                       
                                        <Link to="/middle" onClick={() => handleLinkClick("/middle")} style={{ listStyle: "none", textDecoration: "none" }}>
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
                                            <br /><br />
                                            <div className='cards'>

                                                <img src={card.img} class=" img2 " alt="..." />

                                                <div className="info">
                                                    <Link to={`/card/${card.title}`} onClick={() => handleLinkClick(`/card/${card.title}`)} state={{ card }} className="button">View Now</Link>
                                                </div>                                </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className='col-lg-4  ' style={{

                                    marginTop: "-0px"
                                }} ><br /><br />
                                    <div className='begins' data-aos="zoom-in-down" data-aos-duration="1000">
                                        <h4 className='text-center'>CROSSROAD</h4>
                                        <Link to="/crossroad" onClick={() => handleLinkClick("/crossroad")} style={{ listStyle: "none", textDecoration: "none" }}>
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