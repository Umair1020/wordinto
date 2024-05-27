import React from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

const Cross = () => {
    const cross = [
        {
            img: '/cross1.png',
            title: 'Prelude 53',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ',
            price: "$3.00"
        },
        {
            img: '/cross4.png',
            title: 'Prelude 99',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ',
            price: "$3.00"
        },
        {
            img: '/cross3.png',
            title: 'Prelude 2',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ',
            price: "$3.00"
        },
        {
            img: '/cross5.png',
            title: 'Prelude 15',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  ',
            price: "$3.00"
        },
    ];

    return (

        <div className='' style={{ background: "#000" }} >
            <Header />
            <div className='beg'> <br />
                <h2>SHOP BY CATEGORY</h2>
                <h3>CROSSROAD</h3>
            </div>
            <div className='row'>
                {cross.map((card, index) => (
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
            <Footer />
        </div>
    )
}

export default Cross