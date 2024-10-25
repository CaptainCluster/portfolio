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
    <div className="about-me fade-in">
      <PageTitle pageTitle="About Me" />
      {aboutMeData.map(aboutMeEntry => generateAboutSection(aboutMeEntry))}
    </div>
  )
}

export default AboutMe;
