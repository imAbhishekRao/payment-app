import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PaymentSuccess = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
         
        </svg>
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Thank you for your payment. Your transaction was successful.</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => navigate("/Dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

// export default PaymentSuccess;
