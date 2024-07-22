import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header/Header';
import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';

const ShopComp = () => {
    const location = useLocation();
    const { card } = location.state || {};
    const navigate = useNavigate();

    const [selectedType, setSelectedType] = useState(null);
    const [showValidation, setShowValidation] = useState(false);

    const handleBuyNowClick = () => {

        if (!selectedType) {
            setShowValidation(true);
        } else {
            setShowValidation(false);
            const updatedCard = {
                ...card,
                price: selectedType === 'Physical' ? '$8.00' : '$6.00',
                selectedType: selectedType
            };

            navigate('/payment', { state: { card: updatedCard } });
        }
    };

    return (
        <div className='h-100' style={{ background: "#000" }}>
            <Helmet>
        <title>Into Words - Shop</title>
      </Helmet>
            <Header />
            <div className='beg'><br />
                <h2>SHOP</h2>
            </div>
            <h4 className='text-light text-center'>Card Type :</h4>
            <div className="middle-section d-flex justify-content-center">
                <button className={`buttons text-light ${selectedType === 'Digital' ? 'selected' : ''}`} onClick={() => setSelectedType('Digital')}>Digital</button>
                <button className={`buttons text-light mx-3 ${selectedType === 'Physical' ? 'selected' : ''}`} onClick={() => setSelectedType('Physical')}>Physical</button>
            </div>

            {showValidation && <p className='text-light text-center'>Please select one option before proceeding.</p>}

            <div className="row text-light  ">
                {card && (
                    <>
                        <div className='col-lg-4 mx-auto'>
                            <img src={card.img} alt={card.title} className=' w-100' />
                        </div>
                        <div className='col-lg-6 carddesc' >
                            <h2>{card.title}</h2>
                            <p className=''>{card.para}</p>
                            <p className=''>{card.note}</p>
                            <div className='d-flex align-items-center descparent'>
                                <h5 className="text-light title text-center">{selectedType === 'Physical' ? '$8.00' : '$6.00'}</h5>
                                <button className="button mx-5" onClick={handleBuyNowClick}>Buy Now</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ShopComp;
