import React from "react";

const TechnologyCard = (props) => {
  // const pwidth = `w-[${props.techStatus}] bg-green-500`
  return (
    <div className="w-[45%] md:w-[22%] lg:w-[14.66%] rounded-md overflow-hidden">
      <div className="h-[100px]  overflow-hidden">
        <img
          src={props.imgsrc}
          className="h-full w-full transition-all hover:scale-105 "
        />
      </div>
      <div className="p-2 bg-white flex justify-between">
        <h3 className="text-black text-sm md:text-base">{props.techName}</h3>
        {/* <p className="text-sm text-slate-600 my-1">{props.techExperience}</p> */}
      </div>
      <div className="w-full">
        {/* <div
          className="h-1"
          style={{ width: props.techStatus, backgroundColor: props.techColor }}
        ></div> */}
      </div>
    </div>
  );
};

export default TechnologyCard;
