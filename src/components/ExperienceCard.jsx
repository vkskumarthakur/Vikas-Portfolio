import React from "react";
const ExperienceCard = (props) => {
  return (
    <div className="bg-white text-black p-2 px-3 min-w-full w-full lg:min-w-[48%] lg:w-[48%] rounded-md flex flex-col md:flex-row md:justify-between">
      <div className="flex gap-3 flex-1">
        <div className="min-w-[12%]">
          <img src={props.imgsrc} className="max-w-full w-[100px] min-w-[50px]" />
        </div>
        <div className="w-auto">
          <h3 className="text-black font-medium">{props.companyName}</h3>
          <p className="text-sm text-slate-600 my-1">
            {props.startDate} - {props.endDate}
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-2 items-center">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#424242"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" 
                />
              </svg>
        <p className="text-sm text-slate-600 my-1">{props.role}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
