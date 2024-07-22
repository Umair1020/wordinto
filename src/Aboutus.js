import React from 'react'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive'
const Aboutus = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 651 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 650 })
        return isMobile ? children : null
    }

    return (
        <div style={{ background: "#000" }}>
             <Helmet>
        <title>Into Words - About</title>
      </Helmet>
            <Desktop>
                <Header />
                <div className='beg'> <br />
                    <h2>ABOUT US</h2>
                    <h5 className=''>Greeting Cards</h5>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <img src='/beg1.png' className='w-100 ' />
                        </div>
                        <div className='col-lg-3'>
                            <img src='/mid7.png' className='w-100  mt-5' />
                        </div>
                        <div className='col-lg-3'>
                            <img src='/mid6.png' className='w-100 ' />
                        </div>
                        <div className='col-lg-3'>
                            <img src='/beg2.png' className='w-100   mt-5' />
                        </div>
                    </div>
                </div>
                <div className='about'> <br />

                    <h3 className='text-center'>Who is Jessaword ?</h3>
                    <p className='text-center d-flex mx-auto text-light col-lg-6 col-sm-8'>Jessica Thomas escaped the cares and frustrations of life through expressing her thoughts in her writing. Whether through poetry, theatrical plays, or short skits; it was her way of expressing happiness, joy and excitement, and releasing heartaches, dealing with loneliness, hurts and disappointments.
                        Jessica found her passion in writing plays that would encourage others to think about their own lives and relationships with GOD and man. <br />
                        Throughout the years, Jessica continued writing and producing her plays, and in 2014 Thomas Pierce approached her and asked if she would like to start a business together. He would do the music and Jessica would write. The goal is to provide affordable, inspirational theatre to the community.
                        The name "Jessaword" fits the description (just-a-word for you, written by Jessica Thomas; inspired by GOD and life's challenges).</p>
                    <h3 className='text-center'>Brand Mission
                    </h3>
                    <p className='text-center  text-light col-lg-12 col-sm-8'>To Stimulate growth in relationships through communication.</p>
                    <h3 className='text-center'>Brand Vision
                    </h3>
                    <p className='text-center d-flex mx-auto text-light col-lg-6 col-sm-8'>Serve as a resource for meaningful communication for those navigating the world of relationships.</p>
                    <h3 className='text-center'>Brand Position Statement
                    </h3>
                    <p className='text-center d-flex mx-auto text-light col-lg-6 col-sm-8'>To communication conscious consumers, our greeting cards are tools for true expression in relationships. We believe everyone deserves a chance to share moments of reflection, affection, and progression with the people they care about most.</p>
                </div>
                <br />
                <div className='about'>
                    <h3 className='text-center'>Our Story</h3>
                    <video className=" w-50 mx-auto d-flex" autoPlay muted loop>
                        <source src="/words.mp4" type="video/mp4" />
                    </video>
                    {/* <img src='/story.png' className='w-50 mx-auto d-flex' /> */}
                </div>
                <Footer />
            </Desktop>
            <Mobile>
                <Header />
                <div className='about'> <br />
                    <h3 className='text-center'>Who is Jessaword ?</h3>
                    <p className='text-center d-flex mx-auto text-light col-lg-6 col-sm-8'>Jessica Thomas escaped the cares and frustrations of life through expressing her thoughts in her writing. Whether through poetry, theatrical plays, or short skits; it was her way of expressing happiness, joy and excitement, and releasing heartaches, dealing with loneliness, hurts and disappointments.
                        Jessica found her passion in writing plays that would encourage others to think about their own lives and relationships with GOD and man. <br />
                        Throughout the years, Jessica continued writing and producing her plays, and in 2014 Thomas Pierce approached her and asked if she would like to start a business together. He would do the music and Jessica would write. The goal is to provide affordable, inspirational theatre to the community.
                        The name "Jessaword" fits the description (just-a-word for you, written by Jessica Thomas; inspired by GOD and life's challenges).</p>
                    <h3 className='text-center'>Brand Mission
                    </h3>
                    <p className='text-center  text-light col-lg-12 col-sm-8'>To Stimulate growth in relationships through communication.</p>
                    <h3 className='text-center'>Brand Vision
                    </h3>
                    <p className='text-center d-flex mx-auto text-light col-lg-6 col-sm-8'>Serve as a resource for meaningful communication for those navigating the world of relationships.</p>
                    <h3 className='text-center'>Brand Position Statement
                    </h3>
                    <p className='text-center d-flex mx-auto text-light col-lg-6 col-sm-8'>To communication conscious consumers, our greeting cards are tools for true expression in relationships. We believe everyone deserves a chance to share moments of reflection, affection, and progression with the people they care about most.</p>
                </div>
                <br />
                <div className='about'>
                    <h3 className='text-center'>Our Story</h3>
                    <video className=" w-50 mx-auto d-flex" autoPlay muted loop>
                        <source src="/words.mp4" type="video/mp4" />
                    </video>
                    {/* <img src='/story.png' className='w-50 mx-auto d-flex' /> */}
                </div>
                <Footer />
            </Mobile>
        </div>
    )
}

export default Aboutus