import React, { useState } from 'react';
import modalImg from '../Assests/ContactUs.jpg'

const ConnectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the email and phone data, e.g., submit it to a server

    // Clear the form fields
    setEmail('');
    setPhone('');

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded"
      >
        Connect Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" bg-gray-200 rounded-lg p-10 flex">
            <div className="w-1/2 pr-6">
              <img src={modalImg} alt="Modal Image" className="h-96 object-cover" />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-4">Connect Now</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mr-2 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectModal;
