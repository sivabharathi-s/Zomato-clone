import { useParams } from 'react-router-dom';
import './RestaurantMenu.css';
import { useState } from 'react';

function RestaurantMenu() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [redeemCode, setRedeemCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentDetails, setPaymentDetails] = useState({ upiId: '', method: '' });

  const menuItems = [
    { id: 1, name: 'Butter Chicken', price: '₹350', img: 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg' },
    { id: 2, name: 'Paneer Tikka', price: '₹250', img: 'https://th.bing.com/th/id/OIP.X_VKVv9crDGW8QuD3TUgoAHaLH?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Biryani', price: '₹300', img: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg' },
    { id: 4, name: 'Masala Dosa', price: '₹150', img: 'https://i.pinimg.com/originals/82/87/7b/82877b520bddd7d663ce747108955afc.jpg' },
    { id: 5, name: 'Chole Bhature', price: '₹200', img: 'https://www.yumcurry.com/wp-content/uploads/2021/08/chole-bhature.jpg' },
    { id: 6, name: 'Gulab Jamun', price: '₹100', img: 'https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg' },
    // Add more menu items as needed
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevCart.filter(cartItem => cartItem.id !== item.id);
        } else {
          return prevCart.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          );
        }
      }
      return prevCart;
    });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleRedeemCode = () => {
    // Example: Apply a 10% discount for a specific redeem code
    if (redeemCode === 'DISCOUNT10') {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((total, item) => total + item.quantity * parseInt(item.price.replace('₹', '')), 0);
    return total - total * discount;
  };

  const handleBuy = () => {
    // Handle payment logic here
    alert(`Payment of ₹${calculateTotalPrice()} made using ${paymentDetails.method} with UPI ID: ${paymentDetails.upiId}`);
  };

  return (
    <div className="menu-container">
      <div className="container py-5">
        <h1 className="text-center mb-4">Restaurant {id} Menu</h1>
        <button className="btn btn-secondary mb-4"onClick={toggleCart}>
          {showCart ? 'Hide Cart' : 'Show Cart'}
        </button>
        {showCart && (
          <div className="cart-container mb-4">
            <h2>Cart Items</h2>
            {cart.length === 0 ? (
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
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter Redeem Code"
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={handleRedeemCode}>Apply</button>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="upiId"
                    placeholder="Enter UPI ID"
                    value={paymentDetails.upiId}
                    onChange={handlePaymentChange}
                  />
                </div>
                <div className="mb-3">
                  <select name="method" value={paymentDetails.method} onChange={handlePaymentChange}>
                    <option value="">Select Payment Method</option>
                    <option value="GPay">GPay</option>
                    <option value="PhonePe">PhonePe</option>
                    <option value="Paytm">Paytm</option>
                  </select>
                </div>
                <button className="btn btn-success" onClick={handleBuy}>Buy</button>
              </>
            )}
          </div>
        )}
        <div className="row">
          {menuItems.map(item => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary" onClick={() => addToCart(item)}>+</button>
                    <span className="mx-2">
                      {cart.find(cartItem => cartItem.id === item.id)?.quantity || 0}
                    </span>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item)}>-</button>
                  </div>
                  <p className="mt-2">Add to cart</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;