import { useEffect, useState }      from "react";
import ExperienceInterface          from "../../models/interfaces/ExperienceInterface";
import { displayKeySkill }          from "../../utils/displayKeySkill";
import { calculateTimeDifference }  from "../../utils/calculateTimeDifference";
import { skillBadgeData } from "../../data/skillBadge";

const ExperienceEntry = ({experienceEntry, index}: {experienceEntry: ExperienceInterface, index: number}) => {
 
  const [experienceTime, setExperienceTime] = useState(0);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  useEffect(() => setExperienceTime(calculateTimeDifference(experienceEntry.startDate, experienceEntry.endDate)), []);

  return (
    <div key={index} className="font-serif text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="p-5">
        <h1 className="mb-4 text-2xl">{experienceEntry.title}</h1>
        <div className="my-8">
          <p>{`${experienceEntry.startDate.toDateString()} - ${experienceEntry.endDate.toDateString()}`}</p>
          <p>{`In months: ${experienceTime}`}</p>
        </div>
        
        <div className="my-8">
          {"Key skills: "} 
          {experienceEntry.keySkills.map((skill, index) => displayKeySkill(skill, index, experienceEntry.keySkills.length))}
        </div>

        <button className="border-b border-gray-800 my-4" onClick={() => setDescriptionExpanded(!descriptionExpanded)}>Expand</button>

        {descriptionExpanded && <div className="bg-gray-100 rounded-lg text-left p-10 slide-animation">
          <h2 className="text-xl text-center my-2 fade-in-text">Description</h2>
          {experienceEntry.description.map((entry, index) => <p className="p-2 fade-in-text" key={index}>{entry}</p>)}
        </div>}
      </div>
    </div>
  );
}

export default ExperienceEntry;
