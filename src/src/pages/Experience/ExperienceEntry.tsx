import { useEffect, useState }      from "react";
import ExperienceInterface          from "../../models/interfaces/ExperienceInterface";
import { displayKeySkill }          from "../../utils/displayKeySkill";
import { calculateTimeDifference }  from "../../utils/calculateTimeDifference";

const ExperienceEntry = ({experienceEntry, index}: {experienceEntry: ExperienceInterface, index: number}) => {
 
  const [experienceTime, setExperienceTime] = useState(0);

  useEffect(() => setExperienceTime(calculateTimeDifference(experienceEntry.startDate, experienceEntry.endDate)), []);

  return (
    <div key={index} className="font-serif text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="p-5">
        <h1 className="text-2xl">{experienceEntry.title}</h1>
        <div>
          {`${experienceEntry.startDate.toDateString()} - ${experienceEntry.endDate.toDateString()}`}
          <p>{`In months: ${experienceTime}`}</p>
        </div>
        <div>
          {"Key skills: "} 
          {experienceEntry.keySkills.map((skill, index) => displayKeySkill(skill, index, experienceEntry.keySkills.length))}
        </div>
        <div className="p-3">
          {experienceEntry.description}
        </div>
      </div>
    </div>
  );
}

export default ExperienceEntry;
