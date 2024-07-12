import React, { useRef } from "react";
const SideBar = () => {
  const scrollToProjectCard = () => {
    document
      .getElementById("cardProject")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTechnology = () => {
    document
      .getElementById("technologyCard")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    document
      .getElementById("experience")
      .scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <aside className=" text-white p-2 lg:p-4">
      <div>
        <ul className="flex flex-col gap-4">
          <li
            className="group flex justify-center lg:justify-start items-center gap-5 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-300 px-2 py-3 rounded-md hover:bg-green-400"
            onClick={scrollToHome}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline
                  points="9 22 9 12 15 12 15 22"
                  className="group-hover:stroke-[#000000]"
                />
              </svg>
            </span>
            <span className="text-[#424242] font-bold group-hover:text-black hidden lg:block">
              Home
            </span>
          </li>
          <li
            className="group flex justify-center lg:justify-start items-center gap-5 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-300 hover:-translate-y-1 cursor-pointer px-2 py-3 rounded-md hover:bg-green-400"
            onClick={scrollToProjectCard}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-folder-check"
              >
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                <path
                  d="m9 13 2 2 4-4"
                  className="group-hover:stroke-[#000000]"
                />
              </svg>
            </span>
            <span className="text-[#424242] font-bold group-hover:text-black hidden lg:block">
              Projects
            </span>
          </li>
          <li
            className="group flex justify-center lg:justify-start items-center gap-5 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-300 hover:-translate-y-1 cursor-pointer px-2 py-3 rounded-md hover:bg-green-400"
            onClick={scrollToTechnology}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code-2"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path
                  d="m14.5 4-5 16"
                  className="group-hover:stroke-[#000000]"
                />
              </svg>
            </span>
            <span className="text-[#424242] font-bold group-hover:text-black hidden lg:block">
              Skills
            </span>
          </li>
          <li
            className="group flex justify-center lg:justify-start items-center gap-5 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-300 hover:-translate-y-1 cursor-pointer px-2 py-3 rounded-md hover:bg-green-400"
            onClick={scrollToExperience}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path
                  d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                  className="group-hover:stroke-[#000000]"
                />
              </svg>
            </span>
            <span className="text-[#424242] font-bold group-hover:text-black hidden lg:block">
              Experience
            </span>
          </li>
        </ul>

        <p className="text-[#424242] text-left font-bold text-xl my-7 hidden lg:block">
          Connections
        </p>
        <ul className="flex flex-col gap-5 mb-4 mt-4 lg:mt-1">
          <li className="group flex justify-center lg:justify-start items-center gap-5 p-2 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <a
              href="https://linkedin.com/in/vkskumarthakur"
              target="_blank"
              className=""
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A66C2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
            </a>
            <a
              href="https://linkedin.com/in/vkskumarthakur"
              target="_blank"
              className="hidden lg:block"
            >
              <span className="text-[#424242] font-bold text-left group-hover:text-[#0A66C2] hidden lg:block">
                Linkedin
              </span>
            </a>
          </li>
          <li className="group flex justify-center lg:justify-start items-center gap-5 p-2 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <a
              href="https://github.com/vkskumarthakur"
              target="_blank"
              className=""
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6cc644"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/vkskumarthakur"
              target="_blank"
              className="hidden lg:block"
            >
              <span className="text-[#424242] font-bold text-left group-hover:text-[#6cc644] hidden lg:block">
                Github
              </span>
            </a>
          </li>
          <li className="group flex justify-center lg:justify-start items-center gap-5 p-2 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <a
              href="mailto:vkskumarthakur@gmail.com"
              target="_blank"
              className=""
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff5d5d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
            </a>
            <a
              href="mailto:vkskumarthakur@gmail.com"
              target="_blank"
              className="hidden lg:block"
            >
              <span className="text-[#424242] font-bold text-left group-hover:text-[#ff5d5d] hidden lg:block">
                Email
              </span>
            </a>
          </li>
          <li className="group flex justify-center lg:justify-start items-center gap-5 p-2 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <a
              href="https://twitter.com/vkskumarthakur"
              target="_blank"
              className=""
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1DA1F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </span>
            </a>
            <a
              href="https://twitter.com/vkskumarthakur"
              target="_blank"
              className="hidden lg:block"
            >
              <span className="text-[#424242] font-bold text-left group-hover:text-[#1DA1F2] hidden lg:block">
                Twitter
              </span>
            </a>
          </li>
          <li className="group flex justify-center lg:justify-start items-center gap-5 p-2 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <a
              href="https://instagram.com/vkskumarthakur"
              target="_blank"
              className=""
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#b5179e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </span>
            </a>
            <a
              href="https://instagram.com/vkskumarthakur"
              target="_blank"
              className="hidden lg:block"
            >
              <span className="text-[#424242] font-bold text-left group-hover:text-[#b5179e] hidden lg:block">
                Instagram
              </span>
            </a>
          </li>
          <li className="group flex justify-center lg:justify-start items-center gap-5 p-2 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <a
              href="https://wa.me/919798485648"
              className=""
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38" /><stop offset="100%" stop-color="#60d669" /></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9" /><stop offset="100%" stop-color="#fff" /></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" /><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" /><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" /></svg>
              </span>
            </a>
            <a
              href="https://wa.me/919798485648"
              className="hidden lg:block"
            >
              <span className="text-[#424242] font-bold text-left group-hover:text-[#25D366] hidden lg:block">
                WhatsApp
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
