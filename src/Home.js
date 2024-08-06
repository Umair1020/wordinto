import React from 'react';
import { Footer } from './components/Footer';
import Main from './components/Main';
import { useMediaQuery } from "react-responsive";
import Header from './components/Header/Header';
import { Helmet } from 'react-helmet';
import ReactAudioPlayer from "react-audio-player";
import TawkTo from './TawkTo';

const Home = () => {

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
            <Helmet>
                <title>Into Words - Home</title>
            </Helmet>
            <TawkTo />
            <ReactAudioPlayer
                src="/night.mp3"
                autoPlay
                loop
            />
            <Desktop>

                <div className='' style={{ background: "#000" }}>
                    <Main />
                    <Footer />
                </div>
            </Desktop>
            <Mobile>
                <Main />
                {/* <Footer /> */}
            </Mobile>
        </>
    );
};

export default Home;
