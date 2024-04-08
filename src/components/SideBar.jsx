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
            className="group flex justify-center lg:justify-start items-center gap-5 transition-all duration-500 hover:-translate-y-1 cursor-pointer transition-all duration-300 hover:-translate-y-1 cursor-pointer px-2 py-3 rounded-md hover:bg-green-400"
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
              Technologies
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
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
