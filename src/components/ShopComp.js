import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';

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
            navigate('/payment', { state: { card } });
        }
    };

    return (
        <div className='h-100' style={{ background: "#000" }}>
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

            <div className="row text-light mx-auto">
                {card && (
                    <>
                        <div className='col-lg-3 mx-auto'>
                            <img src={card.img} alt={card.title} />
                        </div>
                        <div className='col-lg-6' style={{ marginTop: "100px" }}>
                            <h2>{card.title}</h2>
                            <p className='w-75'>{card.para}</p>
                            {/* <br /> */}
                            <div className='d-flex align-items-center'>
                                <h5 class=" text-light  title text-center">{card.price}</h5>
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
