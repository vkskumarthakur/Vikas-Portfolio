import React, { useRef } from "react";

const ProjectCard = (props) => {
  // const scroll = useRef(null);
  return (
    <div className="w-full md:w-[48%] lg:w-[23%] rounded-md overflow-hidden">
      <a href={props.link} className="hover:cursor-pointer">
        <div className="min-h-[200px] overflow-hidden">
          <img
            src={props.imgsrc}
            className="min-h-[inherit] h-[200px] w-full transition-all hover:scale-105 "
          />
        </div>
      </a>
      <div className="p-2 bg-white">
        <h3 className="text-black font-medium">{props.projectName}</h3>
        <p className="text-sm text-slate-600 my-1">{props.technologyUsed}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
