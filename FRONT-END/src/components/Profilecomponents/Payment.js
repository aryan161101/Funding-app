import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    const userId = JSON.parse(localStorage.getItem('payments'));
    const response = await fetch("http://localhost:5000/payments", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        cardNumber,
        amount: 2000, 
      }),
    });
    
    const responseData = await response.json();

    if (response.status === 200) {
      setPaymentStatus(true); 
    } else {
      setPaymentStatus(false); 
    }
  };

  const renderPopup = () => {
    if (paymentStatus === true) {
      return <div className="popup success">Payment Successful!</div>;
    } else if (paymentStatus === false) {
      return <div className="popup error">Payment Failed. Please try again.</div>;
    }
    return null;
  };

  return (
    <div className="payment-container">
  <h2>Payment Details</h2>
  {renderPopup()}
  <form className="payment-form" onSubmit={handlePayment}>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="card">Card Number</label>
      <input type="text" id="card" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount" value="2000" readOnly />
    </div>
    <button className="pay-button" type="submit">Pay Now</button>
  </form>
</div>

  );
};

export default Payment;
