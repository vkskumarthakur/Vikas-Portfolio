import React from "react";
import TopCover from "../components/TopCover";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import TechnologyCard from "./TechnologyCard";
import Techdata from "./TechData";
import techData from "./TechData";
import ExperienceCard from "./ExperienceCard";
import experiencecardData from "./ExperienceCardData";
import experiencedata from "./ExperienceCardData";

const MainContainer = () => {
  return (
    <div className="mb-6">
      <TopCover />
      <div className="mt-5">
        <h2 className="mb-4 text-xl font-bold" id="cardProject">
          Projects
        </h2>
        <div className="flex justify-start gap-5 items-stretch flex-wrap gap-y-5">
          {ProjectCardData.map((cardData, key) => {
            return (
              <ProjectCard
                key={cardData.id}
                link={cardData.link}
                imgsrc={cardData.imgsrc}
                projectName={cardData.projectName}
                technologyUsed={cardData.technologyUsed}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="mb-4 text-xl font-bold" id="technologyCard">
          Technologies
        </h2>
        <div className="flex justify-start items-stretch flex-wrap gap-y-5 gap-x-5">
          {techData.map((techdata, key) => {
            return (
              <TechnologyCard
                key={techdata.id}
                imgsrc={techdata.imgsrc}
                techName={techdata.techName}
                techStatus={techdata.techStatus}
                techColor={techdata.techColor}
                techExperience={techdata.techExperience}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="mb-4 text-xl font-bold" id="experience">
          Experiences
        </h2>
        <div className="flex justify-start items-stretch flex-wrap gap-y-5 gap-x-5">
          {experiencecardData.map((experiencedata, key) => {
            return (
              <ExperienceCard
                key={experiencedata.id}
                imgsrc={experiencedata.imgsrc}
                companyName={experiencedata.companyName}
                startDate={experiencedata.startDate}
                endDate={experiencedata.endDate}
                role={experiencedata.role}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        {/* <p className="text-center thankyou-text">Thank you for visiting!</p> */}
      </div>
    </div>
  );
};

export default MainContainer;
