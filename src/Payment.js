import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51PL9YrP6XcSVWyPkpkHO4QA1eYIix9x4D9bvQBnkDZEYfi6wPstfhMlASNDT1SoYYLfp8F7UCKNtDK3ENtKBeXxX00YWaHmRxA');

const PaymentPage = () => {
  const location = useLocation();
  const { card } = location.state || {};
  return (
    <div className="payment-page">
      <div className="product-info">
        <img src={card.img} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.para}</p>
        <h3>{card.price}</h3>
      </div>
      <div className="payment-form">
        <h2>Pay with Card</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm card={card} />
        </Elements>
      </div>
    </div>
  );
};

const CheckoutForm = ({ card }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: event.target.senderName.value,
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment method created successfully:', paymentMethod);
      
      // Prepare data to send to the server
      const formData = new FormData(event.target);
      formData.append('stripeToken', paymentMethod.id);
      formData.append('cardBrand', paymentMethod.card.brand);
      formData.append('cardLast4', paymentMethod.card.last4);
      formData.append('amount', card.price);
      formData.append('selectedType', card.selectedType);
      formData.append('title', card.title);

      // Send data to the server using Axios
      try {
        const response = await axios.post('http://wordinto.test/Wordinto_backend/public/api/stripe', formData);
        console.log('Server response:', response.data);
        // Handle successful response from server
      } catch (error) {
        console.error('Error sending data to server:', error);
        // Handle error
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" className="form-control" name="amount" value={card.price} required />
      <input type="hidden" className="form-control" name="selectedType" value={card.selectedType} required />
      <div className='row'>
        <div className="form-group w-50 col-lg-6">
          <label>Sender's Name</label>
          <input type="text" className="form-control" name="senderName" required />
        </div>
        <div className="form-group col-lg-6" >
          <label>Receiver's Name</label>
          <input type="text" className="form-control" name="receiverName" required />
        </div>
        <div className="form-group">
          <label>Receiver's Email</label>
          <input type="email" className="form-control" name="receiverEmail" required />
        </div>
        <div className="form-group">
          <label>Card information</label>
          <CardElement className="form-control" />
        </div>
        <div className="form-group">
          <label>Cardholder name</label>
          <input type="text" className="form-control" name="cardholderName" required />
        </div>
        <div className="form-group">
          <label>Country or region</label>
          <select className="form-control" name="country" required>
            <option value="Pakistan">Pakistan</option>
            <option value="United States">United States</option>
            {/* Add other countries as needed */}
          </select>
        </div>
        <div className="form-group">
          <input type="checkbox" className="form-check-input" />
          <label className='mx-2'>Securely save my information for 1-click checkout</label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!stripe}>Pay</button>
      </div>
    </form>
  );
};

export default PaymentPage;
