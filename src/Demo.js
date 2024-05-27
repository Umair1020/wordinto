import React from 'react'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'

const Demo = () => {
    return (
        <div>
        <section className="section__first is--scrolled js--scrollify video-section" data-section-name="first">
            <video className="background-video" autoPlay muted loop>
                <source src="/words.mp4" type="video/mp4" />
            </video>
            <div className="overlay">
                <br />
                <Header />
                <br /><br />
                <div className="middle-section">
                    <h2 className="js--first-title">INTO WORDS</h2>
                    <button className="button">Greeting Cards</button>
                </div>
            </div>
        </section>
        <section className="section__second is--scrolled js--scrollify" data-section-name="second" >
            <div className='row' id="inner">
                <div className='col-lg-12 d-flex justify-content-center mx-auto ' style={{marginTop: "-30px" }} >
                    <img className='d-flex justify-content-center mx-auto img animate-on-scroll' data-animation="animate__fadeIn" src='/beg1.png' />
                </div>
                <div className='col-lg-4 animate-on-scroll' data-animation="animate__fadeIn">
                    <img src='/beg5.png' style={{ width: "450px", marginTop: "-400px" }} />
                </div>
                <div className='col-lg-4 begparent'>
                    <div className='begin'>
                        <h4 className='text-center'>BEGINNING</h4>
                        <div className='d-flex align-items-center'>
                            <button className='shop mx-auto'>Shop Now</button>
                        </div>
                    </div>
                    <br />
                    <div className='desc'>
                        <p className='para2'>
                            The point in time or space at which something starts. <br /><br />
                            Two people getting to know each other. The beginning stage: the couple can’t get enough of each other: they stay on the phone together all night, cannot wait to get in each other’s presence; flowers, butterflies, dates and dinners.
                        </p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <img src='/beg2.png' className='img mx-5 animate-on-scroll' data-animation="animate__fadeIn" style={{ marginTop: "-100px" }} />
                </div>
            </div>
        </section>
        <section className="section__third is--scrolled js--scrollify js--third" data-section-name="third">
            <div className='row'>
                <div className='col-lg-4 d-flex justify-content-center mx-auto mt-5 animate-on-scroll' data-animation="animate__fadeIn" style={{marginTop: "-100px" }} >
                    <img className='d-flex justify-content-center img mx-auto' src='/mid1.png' />
                </div>
                <div className='col-lg-4 animate-on-scroll' data-animation="animate__fadeIn">
                    <img src='/mid3.png' className='img' style={{ marginLeft: "0px" }} />
                </div>
                <div className='col-lg-4 mt-5 animate-on-scroll' data-animation="animate__fadeIn">
                    <img src='/mid6.png' className='img' />
                </div>
                <div className='col-lg-4'>
                    <img src='/mid2.png' className='img animate-on-scroll' data-animation="animate__fadeIn" />
                </div>
                <div className='col-lg-4' style={{ marginTop: "-70px" }}>
                    <div className='begin'>
                        <h4 className='text-center js--third-title'>Middle</h4>
                        <div className='d-flex align-items-center'>
                            <button className='shop mx-auto'>Shop Now</button>
                        </div>
                    </div>
                    <br />
                    <div className='desc'>
                        <p className='para2'>
                            The point or position at an equal distance from the sides, edges, or ends of something. <br /><br />
                            In the middle stage, the real person emerges. The couple is in a committed relationship, yet there are disagreements and misunderstandings. They do not plan to end the relationship, but communicate and come to an agreement.
                        </p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <img src='/mid5.png' className='img animate-on-scroll' data-animation="animate__fadeIn" style={{ marginTop: "-204px", height: "504px", marginLeft: "-252px" }} />
                </div>
            </div>
        </section>
        <section className="section__fourth is--scrolled js--scrollify" data-section-name="fourth">
            <div className='row'>
                <div className='col-lg-4 d-flex justify-content-center mx-auto mt-5 animate-on-scroll' data-animation="animate__fadeIn">
                    <img className='d-flex justify-content-center mx-auto img' src='/cross1.png' />
                </div>
                <div className='col-lg-4 animate-on-scroll' data-animation="animate__fadeIn">
                    <img src='/cross4.png' className='img' />
                </div>
                <div className='col-lg-4 animate-on-scroll' data-animation="animate__fadeIn">
                    <img src='/cross3.png' className='img mt-5' />
                </div>
                <div className='col-lg-4 animate-on-scroll' data-animation="animate__fadeIn">
                    <img src='/cross2.png' className='img mx-5' style={{ marginTop: "-204px", height: "504px" }} />
                </div>
                <div className='col-lg-4' style={{ marginTop: "-60px" }}>
                    <div className='begin'>
                        <h4 className='text-center'>CROSSROAD</h4>
                        <div className='d-flex align-items-center'>
                            <button className='shop mx-auto'>Shop Now</button>
                        </div>
                    </div>
                    <br /><br />
                    <div className='desc'>
                        <p className='para2'>
                            A crucial point especially where a decision must be made. <br /><br />
                            The couple is in a committed relationship and comes to a place that may be detrimental to their bond; infidelity, abuse, unexpected turns, lies, and dark secrets. The couple makes a decision to work things out or end the relationship.
                        </p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <img src='/cross5.png' className='img animate-on-scroll' data-animation="animate__fadeIn" />
                </div>
            </div>
        </section>
    </div>
    )
}

export default Demo