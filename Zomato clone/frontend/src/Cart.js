import React, { useState } from 'react';

function Cart({ cart, setCart }) {
  const [redeemCode, setRedeemCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState({ upiId: '', method: '' });

  const handleRedeemCode = () => {
    if (redeemCode === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handlePayment = () => {
    const totalPrice = calculateTotalPrice() * (1 - discount / 100);
    alert(`Payment of ₹${totalPrice} successful using ${paymentDetails.method}`);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * parseInt(item.price.replace('₹', '')), 0);
  };

  return (
    <div className="cart-container mb-4">
      <h2>Cart Items</h2>
      {cart && cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(cartItem => (
              <li key={cartItem.id}>
                {cartItem.name} - {cartItem.quantity} x {cartItem.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{calculateTotalPrice()}</h3>
          <input
            type="text"
            placeholder="Enter Redeem Code"
            value={redeemCode}
            onChange={(e) => setRedeemCode(e.target.value)}
          />
          <button className="btn btn-info" onClick={handleRedeemCode}>Apply Code</button>
          <h3>Discount: {discount}%</h3>
          <h3>Final Total: ₹{calculateTotalPrice() * (1 - discount / 100)}</h3>
          <input
            type="text"
            name="upiId"
            placeholder="Enter UPI ID"
            value={paymentDetails.upiId}
            onChange={handlePaymentChange}
          />
          <select name="method" value={paymentDetails.method} onChange={handlePaymentChange}>
            <option value="">Select Payment Method</option>
            <option value="GPay">GPay</option>
            <option value="PhonePe">PhonePe</option>
            <option value="Paytm">Paytm</option>
          </select>
          <button className="btn btn-success" onClick={handlePayment}>Buy</button>
        </>
      )}
    </div>
  );
}

export default Cart;
