import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './Checkout.css';

const Checkout = () => {
    const { getTotalCartAmount, clearCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleConfirmOrder = () => {
        // Clear the cart after confirming the order
        clearCart();
        
        // Navigate to the address page
        navigate('/address');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="checkout-details">
                <p>Total Amount: ₹{getTotalCartAmount()}</p>
                <button className="confirm-order-button" onClick={handleConfirmOrder}>Confirm Order</button>
            </div>
        </div>
    );
};

export default Checkout;
