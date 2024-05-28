import React from 'react';
 // Ensure you have the CSS file

const Card = ({ imgSrc, name, price }) => {
    return (
        <div className="cardss">
            <img src={imgSrc} alt={name} className="cardss-img img" />
            <div className="cardss-info">
                <h5>{name}</h5>
                <p>${price}</p>
                <button className="view-now">View Now</button>
            </div>
        </div>
    );
};

export default Card;
