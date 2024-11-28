import PageTitle from "../../components/PageName";
import { experienceData } from "../../data/experience";
import ExperienceEntry from "./ExperienceEntry"; 

const Experience = () => {
  return (
    <div className="projects-page h-screen bg-gray-100 fade-in overflow-scroll">
      <PageTitle pageTitle="Experience"/>
      <div className="grid grid-cols-1 gap-10 p-10 max-w-7xl mx-auto">
        {experienceData.length === 0 
          ? <p>No experience that has been made public.</p>
          : experienceData.map((entry, index) => <ExperienceEntry experienceEntry={entry} index={index}/>) 
        } 
      </div>
    </div>
  );
}

export default Experience;
