import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';

const PaymentPage = () => {
  const location = useLocation();
  const { card } = location.state || {};

  if (!card) {
    return <div>No card information provided.</div>;
  }

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
    name: "",
    receiverName: '',
    receiverEmailAddress: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    cardholderName: '',
    billingAddress: '',
    country: 'United States',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() === '') {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validatePageOne = () => {
    const newErrors = {};

    if (card.selectedType === 'Digital') {
      if (!formData.senderName.trim()) newErrors.senderName = 'Sender Name is required';
      if (!formData.receiverName.trim()) newErrors.receiverName = 'Receiver Name is required';
      if (!formData.receiverEmailAddress.trim()) newErrors.receiverEmailAddress = 'Receiver Email Address is required';
    } else {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
      if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email Address is required';
      if (!formData.address.trim()) newErrors.address = 'Address Line 1 is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.zip.trim()) newErrors.zip = 'Zip is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validatePageOne()) {
      setPage(2);
    }
  };
  const handleCardNonceResponseReceived = async (errors, nonce, cardData, buyerVerificationToken) => {
    if (errors) {
        console.error('Encountered errors:', errors);
        return;
    }

    const finalFormData = {
        ...formData,
        nonce, // Token received from Square
        amount: card.price,
        selectedType: card.selectedType,
        title: card.title,
        cardDetails: {
            ...cardData,
            buyerVerificationToken,
        },
    };

    try {
        const response = await axios.post('http://wordinto.test/Wordinto_backend/public/api/square', finalFormData);
        console.log('Server response:', response.data);
        if (response.data.status === 'OK') {
            // Handle successful payment
        } else {
            // Handle error response from the backend
            console.error('Payment processing failed:', response.data);
        }
    } catch (error) {
        console.error('Error sending data to server:', error.response ? error.response.data : error.message);
    }
};

  // const handleCardNonceResponseReceived = async (errors, nonce, cardData, buyerVerificationToken) => {
  //   if (errors) {
  //     console.error('Encountered errors:', errors);
  //     return;
  //   }

  //   const finalFormData = {
  //     ...formData,
  //     nonce,
  //     amount: card.price,
  //     selectedType: card.selectedType,
  //     title: card.title,
  //     // Add additional card details if necessary
  //     cardDetails: {
  //       ...cardData,
  //       buyerVerificationToken,
  //     },
  //   };

  //   try {
  //     const response = await axios.post('http://wordinto.test/Wordinto_backend/public/api/square', finalFormData);
  //     console.log('Server response:', response.data);
  //     // Handle successful payment here
  //   } catch (error) {
  //     console.error('Error sending data to server:', error);
  //   }
  // };

  return (
    <form>
      {page === 1 ? (
        <div className="row">
          {card.selectedType === 'Digital' ? (
            <>
              <div className="form-group col-lg-12 col-sm-12">
                <label className="form-label">Sender Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.senderName ? 'is-invalid' : ''}`}
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleInputChange}
                  required
                />
                {errors.senderName && <div className="invalid-feedback">{errors.senderName}</div>}
              </div>
              <div className="form-group col-lg-12 col-sm-12">
                <label className="form-label">Receiver Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.receiverName ? 'is-invalid' : ''}`}
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleInputChange}
                  required
                />
                {errors.receiverName && <div className="invalid-feedback">{errors.receiverName}</div>}
              </div>
              <div className="form-group col-lg-12 col-sm-12">
                <label className="form-label">Receiver Email Address</label>
                <input
                  type="email"
                  className={`form-control ${errors.receiverEmailAddress ? 'is-invalid' : ''}`}
                  name="receiverEmailAddress"
                  value={formData.receiverEmailAddress}
                  onChange={handleInputChange}
                  required
                />
                {errors.receiverEmailAddress && <div className="invalid-feedback">{errors.receiverEmailAddress}</div>}
              </div>
            </>
          ) : (
            <>
              <div className="form-group col-lg-6 col-sm-12">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group col-lg-6 col-sm-12">
                <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                <input
                  type="number"
                  className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                  id="inputPhone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1 434355566"
                  required
                />
                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
              </div>
              <div className="form-group col-lg-12 col-sm-12 mt-2">
                <label htmlFor="inputEmail" className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-control ${errors.emailAddress ? 'is-invalid' : ''}`}
                  id="inputEmail"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                />
                {errors.emailAddress && <div className="invalid-feedback">{errors.emailAddress}</div>}
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label htmlFor="inputAddress" className="form-label">Address Line 1</label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  id="inputAddress"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="1234 Main St"
                  required
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label htmlFor="inputAddress2" className="form-label">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input
                  type="text"
                  className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                  id="inputCity"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>
              <div className="col-lg-4 col-sm-12 mt-2">
                <label htmlFor="inputState" className="form-label">State</label>
                <select
                  id="inputState"
                  className={`form-select form-control ${errors.state ? 'is-invalid' : ''}`}
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                >
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
                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
              </div>
              <div className="col-lg-2 col-sm-12 mt-2">
                <label htmlFor="inputZip" className="form-label">Zip Code</label>
                <input
                  type="text"
                  className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                  id="inputZip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                />
                {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
              </div>
            </>
          )}
          <button
            type="button"
            className="btn btn-primary mt-5 w-50 mx-2"
            onClick={handleNext}
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="form-group col-lg-12">
            <label>Billing Address</label>
            <input
              type="text"
              className={`form-control ${errors.billingAddress ? 'is-invalid' : ''}`}
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              required
            />
            {errors.billingAddress && <div className="invalid-feedback">{errors.billingAddress}</div>}
          </div>
          <div className="form-group col-lg-12">
            <label>Cardholder name</label>
            <input
              type="text"
              className={`form-control ${errors.cardholderName ? 'is-invalid' : ''}`}
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              required
            />
            {errors.cardholderName && <div className="invalid-feedback">{errors.cardholderName}</div>}
          </div>
          <PaymentForm
            applicationId="sandbox-sq0idb-Aq1YDTqfkLXCmt9cb1N49Q"
            cardTokenizeResponseReceived={handleCardNonceResponseReceived}
            locationId="LP4WCBGAQ51BS"
          >
              <label>Card Details</label>
            <CreditCard />
          </PaymentForm>
        </div>
      )}
    </form>
  );
};

export default PaymentPage;
