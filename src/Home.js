import React , {useRef , useState} from 'react';
import { Footer } from './components/Footer';
import Main from './components/Main';
import { useMediaQuery } from "react-responsive";
import Header from './components/Header/Header';
import { Helmet } from 'react-helmet';
import ReactAudioPlayer from "react-audio-player";
import TawkTo from './TawkTo';

const Home = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
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
            <ReactAudioPlayer
                src="/1.mp3"
                autoPlay
                loop
            />
            {/* <audio ref={audioRef} src="/1.mp3" loop /> */}
            <TawkTo />
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
