import React from 'react';
import './CartPage.css';

function CartPage({ cart }) {
  return (
    <div className="cart-container">
      <div className="container py-5">
        <h1 className="text-center mb-4">Your Cart</h1>
        <div className="row">
          {cart.map(item => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <button className="btn btn-success">Buy Recipe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
