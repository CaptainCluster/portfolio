import React from "react";
import PageTitle from "../../components/PageName";
import AboutSection from "./AboutSection";
import { aboutMeData } from "../../data/aboutMe";
import AboutMeInterface from "../../interfaces/AboutMeInterface";

const AboutMe: React.FC = () => {
  
  const generateAboutSection = ({header, textBody}: AboutMeInterface) => {
    return <AboutSection header={header} textBody={textBody}/> 
  }

  return (
    <div className="about-me bg-gray-100">
      <PageTitle pageTitle="About Me" />
      <div className="flex items-center justify-center h-screen fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
          {aboutMeData.map(aboutMeEntry => generateAboutSection(aboutMeEntry))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
