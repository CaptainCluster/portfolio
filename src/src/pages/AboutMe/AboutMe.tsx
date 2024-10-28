import React            from "react";
import PageTitle        from "../../components/PageName";
import AboutSection     from "./AboutSection";
import { aboutMeData }  from "../../data/aboutMe";
import AboutMeInterface from "../../models/interfaces/AboutMeInterface";

const AboutMe: React.FC = () => {
  
  const generateAboutSection = ({header, textBody}: AboutMeInterface) => {
    return <AboutSection header={header} textBody={textBody}/> 
  }

  return (
    <div className="about-me bg-gray-100 h-screen overflow-scroll">
      <PageTitle pageTitle="About Me" />

      <div className="items-center mb-2 justify-center h-screen fade-in">
        <div className="grid grid-cols-1 gap-10 p-10 max-w-7xl mx-auto">
          {aboutMeData.map(aboutMeEntry => generateAboutSection(aboutMeEntry))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
