// src/PaymentPage.js
import React from 'react';

const PaymentPage = () => {
    return (
        <div className="payment-container">
            <h2 className='pay'>Pembayaran</h2>
            <div className="payment-options">
                <button className="payment-button dana">DANA</button>
                <button className="payment-button gopay">GOPAY</button>
                <button className="payment-button ovo">OVO</button>
            </div>
            <button className="finish-button">Selesai</button>
        </div>
    );
}

export default PaymentPage;
