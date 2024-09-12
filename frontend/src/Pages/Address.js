import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Address.css';

const Address = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Typically handle address submission here
        alert('Address submitted: ' + address + ', ' + city + ', ' + state + ', ' + zip);
        navigate('/confirmation'); // Redirect to the confirmation page
    };

    return (
        <div className="address-container">
            <h1>Enter Shipping Address</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street Address"
                    required
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    required
                />
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State"
                    required
                />
                <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="ZIP Code"
                    required
                />
                <button type="submit" className="submit-address-button">Submit Address</button>
            </form>
        </div>
    );
};

export default Address;
