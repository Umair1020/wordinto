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
        <div className="form-group col-lg-6">
          <label>Receiver's Name</label>
          <input type="text" className="form-control" name="receiverName" required />
        </div>
        {/* <div className="form-group">
          <label>Receiver's Email</label>
          <input type="email" className="form-control" name="receiverEmail" required />
        </div> */}
        {card.selectedType === 'Physical' ? (
          <>
           <div class="col-lg-6 col-sm-12">
              <label for="inputAddress" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="inputAddress" placeholder="+1 434355566" />
            </div> <br />
            <div class="col-lg-6 col-sm-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div><br />
            <div class="col-lg-6 col-sm-12">
              <label for="inputAddress2" class="form-label">Address 2</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div><br />
             <div class="col-lg-6 col-sm-12">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div><br />
              <div class="col-lg-6 col-sm-12">
              <label for="inputState" class="form-label">State</label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
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
            </div><br />
            <div class="col-lg-6 col-sm-12">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>

          </>
        ) : (
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" name="emailAddress" required />
          </div>
        )}
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
