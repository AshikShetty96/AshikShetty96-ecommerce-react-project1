import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Confirmation.css';
import googlePayIcon from '../Components/Assets/image/google-pay.png';
import paytmIcon from '../Components/Assets/image/paytm.png';
import paypalIcon from '../Components/Assets/image/paypal.png';

const Confirmation = () => {
    const [selectedPayment, setSelectedPayment] = useState('');
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleConfirmOrder = () => {
        if (selectedPayment) {
            // Simulate payment processing
            setIsOrderConfirmed(true);
            // Redirect to the shop page after a delay
            setTimeout(() => {
                navigate('/shop');
            }, 3000); // 3 seconds delay
        } else {
            alert('Please select a payment method.');
        }
    };

    const handlePaymentSelection = (method) => {
        setSelectedPayment(method);
    };

    return (
        <div className="confirmation-container">
            {!isOrderConfirmed ? (
                <div className="confirmation-form">
                    <h1>Confirm Your Order</h1>
                    <div className="payment-options">
                        <h2>Select Payment Method</h2>
                        <div
                            className={`payment-option ${selectedPayment === 'google-pay' ? 'selected' : ''}`}
                            onClick={() => handlePaymentSelection('google-pay')}
                        >
                            <img src={googlePayIcon} alt="Google Pay" />
                            <span>Google Pay</span>
                        </div>
                        <div
                            className={`payment-option ${selectedPayment === 'paytm' ? 'selected' : ''}`}
                            onClick={() => handlePaymentSelection('paytm')}
                        >
                            <img src={paytmIcon} alt="Paytm" />
                            <span>Paytm</span>
                        </div>
                        <div
                            className={`payment-option ${selectedPayment === 'paypal' ? 'selected' : ''}`}
                            onClick={() => handlePaymentSelection('paypal')}
                        >
                            <img src={paypalIcon} alt="PayPal" />
                            <span>PayPal</span>
                        </div>
                        <button onClick={handleConfirmOrder} className="confirm-button">
                            Confirm Order
                        </button>
                    </div>
                </div>
            ) : (
                <div className="confirmation-message">
                    <h1>Order Confirmed! 🎉</h1>
                    <p>Your order has been successfully placed. Thank you for shopping with us!</p>
                    <div className="confirmation-animation">
                        <img src="https://media.giphy.com/media/3o6ZsU4t7jQjLXTV4U/giphy.gif" alt="Success Animation" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Confirmation;
