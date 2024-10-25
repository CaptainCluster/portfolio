import React from "react";
import PageTitle from "../../components/PageName";
import {studies_1, studies_2} from "../../data/aboutMe";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me fade-in">
      <PageTitle pageTitle="About Me" />
      <p>{studies_1}</p>
      <p>{studies_2}</p>
    </div>
  )
}

export default AboutMe;
