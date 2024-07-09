import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="py-2 px-10 flex flex-col place-items-center">
        <div className="hidden w-12 h-12 bg-green-400 rounded-full overflow-hidden cursor-pointer transition-all duration-600 hover:scale-105">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N88AhQshQtmrIWiV27FRXnWb9WaAElCVYw&usqp=CAU"
            className="max-w-full"
          />
        </div>
        <span className="text-sm text-white font-bold lg:text-xl">
          {/* Hi There! */}
        </span>
      </div>
      <div className="py-2 px-10 flex justify-between items-center gap-2">
        {/* <FaFacebookF color='#ffffff' /> 
   <FaTwitter  color='#ffffff' /> 
   <FaLinkedinIn color='#ffffff' /> 
   <FaInstagram color='#ffffff' /> */}
        <a href="https://linkedin.com/in/vkskumarthakur" target="_blank">
          <button className="bg-green-400 px-5 py-2 rounded-sm text-white flex justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-plus"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
            Connect
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
