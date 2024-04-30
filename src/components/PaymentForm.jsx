import React, { useState } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the payment details to your server for processing
    // Placeholder code to simulate processing
    alert("Payment Successful!");
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name on Card</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="expiry">Expiry Date</label>
        <input
          type="text"
          id="expiry"
          name="expiry"
          placeholder="MM/YY"
          value={formData.expiry}
          onChange={handleChange}
          required
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          placeholder="123"
          value={formData.cvv}
          onChange={handleChange}
          required
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
