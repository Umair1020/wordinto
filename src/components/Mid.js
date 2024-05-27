import React from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

const Mid = () => {
    const middle = [
        {
            img: '/mid7.png',
            title: 'Prelude 81',
            price: "$3.00",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
        {
            img: '/mid3.png',
            title: 'Prelude 65',
            price: "$3.00",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
        {
            img: '/mid6.png',
            title: 'Prelude 6',
            price: "$3.00",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
        {
            img: '/mid4.png',
            title: 'Prelude 1',
            price: "$3.00",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },

        {
            img: '/mid1.png',
            title: 'Prelude 3',
            price: "$3.00",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
        {
            img: '/mid2.png',
            title: 'Prelude 5',
            price: "$3.00",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',

        },
    ];
    return (
        <div className=' ' style={{ background: "#000" }} >
            <Header />
            <div className='beg'> <br />
                <h2>SHOP BY CATEGORY</h2>
                <h3>Middle</h3>
            </div>
            <div className='row'>
                {middle.map((card, index) => (
                    <div className='cards col-lg-3 d-flex justify-content-center mt-1'>
                        <img src={card.img} class=" img2 " alt="..." />
                        <div class=" d-flex align-items-center " style={{ position: "absolute", top: "90%" }}>
                            <h5 class=" text-light mx-5 title text-center">{card.title}</h5>
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

export default Mid