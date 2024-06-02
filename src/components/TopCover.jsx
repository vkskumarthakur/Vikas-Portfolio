import React from "react";
import CoverImg from "../assets/imgs/aurora-bg-cover.jpg";
import resume from "../assets/docs/Vikas_Kumar_Thakur.pdf";

const TopCover = () => {
  return (
    <div id="home">
      <div
        className="bg-cover h-[150px] overflow-hidden rounded-sm"
        style={{
          backgroundImage: `url(${CoverImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-full flex justify-between items-center px-3 md:px-10 py-3"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div className="flex gap-3 items-center md:flex-row lg:flex-row lg:justify-start lg:gap-10 lg:items-center">
            <div className="avatar-container w-14 h-14 rounded-full md:w-24 md:h-24 md:rounded-full bg-transparent border-green-400 border-2 overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/40897867?v=4"
                className="max-w-full"
              />
            </div>
            <div className="text-lg lg:text-2xl">
              VIKAS KUMAR THAKUR
              <div>
                <a
                  href="https://linkedin.com/in/vkskumarthakur"
                  target="_blank"
                  className="text-sm hover:border-b-2 hover:border-green-500"
                >
                  Front-End Developer
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href={resume} download>
              <button className="bg-[#00000099] flex items-center justify-between gap-2 text-white rounded-md px-3 py-2 transition-all duration-500 hover:bg-green-400">
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download-cloud"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
                </svg>
              </button>
            </a>
          </div>
          <div className="md:hidden lg:hidden sm:block">
            <a href={resume} download>
              <button className="bg-[#00000099] text-white rounded-md px-2 py-2 transition-all duration-500 hover:bg-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download-cloud"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCover;
