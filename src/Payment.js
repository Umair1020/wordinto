import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const PaymentPage = () => {
  const location = useLocation();
  const { card } = location.state || {};

  return (
    <div className="payment-page">
      <Helmet>
        <title>Into Words - Payment</title>
      </Helmet>
      <div className="product-info">
        <img src={card.img} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.para}</p>
        <h3>{`${card.price} x ${card.quantity} = $${(parseFloat(card.price.slice(1)) * card.quantity).toFixed(2)}`}</h3>
      </div>
      <div className="payment-form">
        <h2>Pay with Card</h2>
        <CheckoutForm card={card} />
      </div>
    </div>
  );
};

const CheckoutForm = ({ card }) => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    senderName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    receiverName: '',
    cardholderName: '',
    country: 'United States',
    nonce: '',
  });

  useEffect(() => {
    if (page === 2) {
      const script = document.createElement('script');
      script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
      script.async = true;
      script.onload = () => initializeSquare();
      document.body.appendChild(script);
    }
  }, [page]);

  const initializeSquare = async () => {
    const payments = window.Square.payments('sandbox-sq0idb--phgOUwewHyTT_LX6xLWFOQ', 'sandbox');
    const cardElement = await payments.card();
    await cardElement.attach('#card-container');

    document.querySelector('form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const result = await cardElement.tokenize();
      if (result.status === 'OK') {
        const finalFormData = { ...formData, nonce: result.token, amount: card.price, selectedType: card.selectedType, title: card.title };

        try {
          const response = await axios.post('http://wordinto.test/Wordinto_backend/public/api/square', finalFormData);
          console.log('Server response:', response.data);
        } catch (error) {
          console.error('Error sending data to server:', error);
        }
      } else {
        console.error(result.errors);
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setPage(2);
  const handleBack = () => setPage(1);

  return (
    <form>
      {page === 1 ? (
        <div className="row">
          <div className="form-group col-lg-6 col-sm-12">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="senderName" value={formData.senderName} onChange={handleInputChange} required />
          </div>
          <div className="form-group col-lg-6 col-sm-12">
            <label htmlFor="inputPhone" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="inputPhone" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="+1 434355566" required />
          </div>
          <div className="form-group col-lg-12 col-sm-12 mt-2">
            <label htmlFor="inputEmail" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="inputEmail" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} required />
          </div>
          <div className="col-lg-6 col-sm-12 mt-2">
            <label htmlFor="inputAddress" className="form-label">Address Line 1</label>
            <input type="text" className="form-control" id="inputAddress" name="address" value={formData.address} onChange={handleInputChange} placeholder="1234 Main St" required />
          </div>
          <div className="col-lg-6 col-sm-12 mt-2">
            <label htmlFor="inputAddress2" className="form-label">Address Line 2</label>
            <input type="text" className="form-control" id="inputAddress2" name="address2" value={formData.address2} onChange={handleInputChange} placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-lg-6 col-sm-12 mt-2">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select form-control" name="state" value={formData.state} onChange={handleInputChange} required>
              <option value="">Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="col-lg-2 col-sm-12 mt-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" name="zip" value={formData.zip} onChange={handleInputChange} required />
          </div>
          <button type="button" className="btn btn-primary mt-5 w-50 mx-2" onClick={handleNext}>Checkout</button>
        </div>
      ) : (
        <div className="row">
          {card.selectedType === 'Digital' && (
            <>
              <div className="form-group col-lg-6 col-sm-12">
                <label>Receiver Name</label>
                <input type="text" className="form-control" name="receiverName" value={formData.receiverName} onChange={handleInputChange} required />
              </div>
              <div className="form-group col-lg-6 col-sm-12">
                <label>Receiver Email Address</label>
                <input type="email" className="form-control" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} required />
              </div>
            </>
          )}
          <div id="card-container" className="form-group col-lg-12 "></div>
          <div className="form-group col-lg-12">
            <label>Cardholder name</label>
            <input type="text" className="form-control" name="cardholderName" value={formData.cardholderName} onChange={handleInputChange} required />
          </div>
          <div className="form-group col-lg-12 mt-2">
            <label>Country or region</label>
            <select className="form-control" name="country" value={formData.country} onChange={handleInputChange} required>
              <option value="United States">United States</option>
            
            </select>
          </div>
          <div className="form-group col-lg-12 mt-2">
            <input type="checkbox" className="form-check-input" />
            <label className='mx-2'>Securely save my information for 1-click checkout</label>
          </div>

          <div className="form-group col-lg-12 mt-2">
            <button type="submit" className="btn btn-primary col-lg-4">Pay</button>
            {/* <button type="button" className="btn btn-secondary ml-2" onClick={handleBack}>Back</button> */}
          </div>
        </div>
      )}
    </form>
  );
};

export default PaymentPage;
