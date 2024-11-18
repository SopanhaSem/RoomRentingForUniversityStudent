import React, { useState } from 'react';

const VerifyOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length < 4) {
      setErrorMessage('Please enter a valid 4-digit OTP.');
      return;
    }
    // Handle OTP verification logic here (API call, etc.)
    alert('OTP Verified Successfully!');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Verify OTP
        </h2>

        {errorMessage && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                placeholder="-"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200 shadow-lg transform hover:scale-105"
          >
            Verify OTP
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Didn’t receive the code?{' '}
          <button className="text-teal-500 hover:underline">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
