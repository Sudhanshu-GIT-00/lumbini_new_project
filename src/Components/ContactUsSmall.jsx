import React, { useState } from 'react';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., submit it to a server

    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className=" mx-10 my-10 pl-10 text-black-50">
      <div className=" bg-blue-100 py-10 px-10 container grid grid-cols-2 gap-4">
        <div className='pt-8'>
          <h1 className="text-4xl text-left font-bold mb-4 ">Contact Us</h1>
          <p className="text-lg text-left mb-8">To Stay Informed and Get Exclusive Updates, Simply Fill Out This Quick Form</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center ">
              <label htmlFor="name" className="w-1/3 text-black-50 font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="email" className="w-1/3 text-black-50 font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="phone" className="w-1/3 text-black-50 font-bold">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label htmlFor="message" className="w-1/3 text-black-50 font-bold">
                Message
              </label>
              <textarea
                id="message"
                className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
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
  );
};

export default ContactUsForm;
