import { useEffect, useState } from "react";
import ExperienceInterface from "../../models/interfaces/ExperienceInterface";

const ExperienceEntry = ({experienceEntry, index}: {experienceEntry: ExperienceInterface, index: number}) => {

  const [experienceTime, setExperienceTime] = useState(0);

  useEffect(() => {
    const differenceYears   = experienceEntry.endDate.getFullYear() - experienceEntry.startDate.getFullYear();
    const differenceMonths  = experienceEntry.endDate.getMonth() - experienceEntry.startDate.getMonth();
    setExperienceTime(differenceYears * 12 + differenceMonths + 1);
  }, []);

  return (
    <div key={index} className="font-serif text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="p-5">
        <h1 className="text-2xl">{experienceEntry.title}</h1>
        <div>
          {`${experienceEntry.startDate.toDateString()} - ${experienceEntry.endDate.toDateString()}`}
          <p>{`In months: ${experienceTime}`}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceEntry;
