import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load your Stripe publishable key
const stripePromise = loadStripe('your-stripe-publishable-key');

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
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

const CheckoutForm = () => {
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
        name: 'Jenny Rosen',
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment method created successfully:', paymentMethod);
      // Handle successful payment here (e.g., call your backend to process the payment)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
      <div className="form-group w-50 col-lg-6">
        <label>Sender's Name</label>
        <input type="text" className="form-control" required />
      </div>
      <div className="form-group col-lg-6" >
        <label>Receiver's Name</label>
        <input type="text" className="form-control" required />
      </div>
      <div className="form-group">
        <label>Receiver's Email</label>
        <input type="email" className="form-control" required />
      </div>
      <div className="form-group">
        <label>Card information</label>
        <CardElement className="form-control" />
      </div>
      <div className="form-group">
        <label>Cardholder name</label>
        <input type="text" className="form-control" required />
      </div>
      <div className="form-group">
        <label>Country or region</label>
        <select className="form-control" required>
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
