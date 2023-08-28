import React from "react";

const Footer=()=>{
    return(
    <footer className=" bg-slate-700 text-gray-400">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <h4 className="text-white text-lg  mb-2 text-left">LUMBINI CONSULTANCY SERVICES</h4>
            <ul className="space-y-2 text-left">
              <li>
                <a href="/page1" className="hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="/page2" className="hover:text-white transition-colors duration-300">Galleries</a>
              </li>
              <li>
                <a href="/page3" className="hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="/page4" className="hover:text-white transition-colors duration-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <div className="flex flex-col justify-end h-full">
              <div className="mb-4 text-right">
                <p className="text-white font-bold">Lumbini Consultancy Services</p>
                <p className="text-gray-400">B-HUB, 5th Floor, Block-A, Maurya Lok Complex, Patna, Bihar - 800001</p>
                <p className="text-gray-400">Email: info@lumconser.com </p>
                <p className="text-gray-400">Phone: +91-7979060329</p>
              </div>
              <div className="flex space-x-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Lumbini Consultancy Services Pvt. Ltd. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;