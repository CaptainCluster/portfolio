import { useEffect, useState } from "react";
import ExperienceInterface from "../../models/interfaces/ExperienceInterface";


const ExperienceEntry = ({experienceEntry, index}: {experienceEntry: ExperienceInterface, index: number}) => {
 
  const [experienceTime, setExperienceTime] = useState(0);

  useEffect(() => {
    const differenceYears   = experienceEntry.endDate.getFullYear() - experienceEntry.startDate.getFullYear();
    const differenceMonths  = experienceEntry.endDate.getMonth() - experienceEntry.startDate.getMonth();
    setExperienceTime(differenceYears * 12 + differenceMonths + 1);
  }, []);

  const displayKeySkill = (skill: string, index: number) => {
    if (index === experienceEntry.keySkills.length-1) {
      return <span key={index}>{`${skill}`}</span>
    }
    return <span key={index}>{`${skill}, `}</span>
  }

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
          {experienceEntry.keySkills.map((skill, index) => displayKeySkill(skill, index))}
        </div>
        <div className="p-3">
          {experienceEntry.description}
        </div>
      </div>
    </div>
  );
}

export default ExperienceEntry;
