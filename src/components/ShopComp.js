import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';

const ShopComp = () => {
    const location = useLocation();
    const { card } = location.state || {};
    const navigate = useNavigate();

    const [selectedType, setSelectedType] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showValidation, setShowValidation] = useState(false);

    const handleBuyNowClick = () => {
        if (!selectedType) {
            setShowValidation(true);
        } else {
            setShowValidation(false);
            const updatedCard = {
                ...card,
                price: selectedType === 'Physical' ? '$8.00' : '$6.00',
                selectedType: selectedType,
                quantity: selectedType === 'Physical' ? quantity : 1, // Set quantity only for Physical
            };

            navigate('/payment', { state: { card: updatedCard } });
        }
    };

    const handleQuantityChange = (action) => {
        if (action === 'increase') {
            setQuantity(prev => prev + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
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

            <div className="row text-light">
                {card && (
                    <>
                        <div className='col-lg-4 mx-auto'>
                            <img src={card.img} alt={card.title} className='w-100' />
                        </div>
                        <div className='col-lg-6 carddesc'>
                            <h2>{card.title}</h2>
                            <p>{card.para}</p>
                            <p>{card.note}</p>
                            <div className='d-flex align-items-center descparent'>
                                <h5 className="text-light title text-center">{selectedType === 'Physical' ? '$8.00' : '$6.00'}</h5>
                                {selectedType === 'Physical' && (
                                    <div className="quantity-controls mx-3">
                                        <button className="button" onClick={() => handleQuantityChange('decrease')}>-</button>
                                        <span className="text-light mx-2">{quantity}</span>
                                        <button className="button" onClick={() => handleQuantityChange('increase')}>+</button>
                                    </div>
                                )}
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
