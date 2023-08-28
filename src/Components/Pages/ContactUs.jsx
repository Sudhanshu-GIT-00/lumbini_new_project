import React from "react";
import contactusImg from '../../Assests/ContactUs.jpg'

const ContactUs=()=>{
    return(
      <div className="flex flex-col md:flex-row  bg-gray-600 text-gray-200 py-20 px-40">
      {/* Contact Us */}
      <div className="md:w-1/2 flex flex-col text-left pl-20 px-10 py-16">
        <h2 className="text-5xl font-bold mb-2">Contact Us</h2>
        <h5 className="text-gray-400  text-lg mb-6 pb-8">Get in touch with us for any inquiries or assistance</h5>
        <p className=" text-lg font-bold">Email</p>
        <p className=" text-lg mb-4">info@lumconser.com</p>
        <p className=" text-lg font-bold">Phone</p>
        <p className=" text-lg  mb-4">+91-7979060329</p>
        <p className=" text-lg font-bold">Address</p>
        <p className=" text-lg mb-4">B-HUB, 5th Floor, Block-A, Maurya Lok Complex, Patna, Bihar - 800001</p>

      </div>
    
      {/* Form */}
      <div className="md:w-1/2 py-20">
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 text-left font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full bg-white rounded border border-gray-300 py-2 px-3 placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-400 text-left font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full bg-white rounded border border-gray-300 py-2 px-3 placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="slider" className="block text-gray-400 text-left font-bold mb-2">
              Choose a Slider
            </label>
            {/* Replace the options below with your own slider options */}
            <select
              id="slider"
              name="slider"
              className="w-full bg-white rounded border border-gray-300 text-gray-500 py-2 px-3 focus:outline-none focus:border-blue-400"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
    );
}
export default ContactUs;