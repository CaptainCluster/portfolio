import { useEffect, useState }      from "react";
import ExperienceInterface          from "../../models/interfaces/ExperienceInterface";
import { calculateTimeDifference }  from "../../utils/calculateTimeDifference";
import SkillBadgeHolder from "../../components/SkillBadgeHolder";
import ExpandButton from "../../components/ExpandButton";

const ExperienceEntry = ({experienceEntry, index}: {experienceEntry: ExperienceInterface, index: number}) => {
 
  const [experienceTime, setExperienceTime] = useState(0);
  const [expand, setExpand] = useState(false);

  useEffect(() => setExperienceTime(calculateTimeDifference(experienceEntry.startDate, experienceEntry.endDate)), []);

  return (
    <div key={index} className="font-serif text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="p-5">
        <h1 className="mb-4 text-2xl">{experienceEntry.title}</h1>
        <div className="my-8">
          <p>{`${experienceEntry.startDate.toDateString()} - ${experienceEntry.endDate.toDateString()}`}</p>
          <p>{`In months: ${experienceTime}`}</p>
        </div>
        
        <div className="grid bg-gray-100 p-8">
          <h2 className="mb-6 text-xl">Skills needed</h2>
          <SkillBadgeHolder skills={experienceEntry.keySkills}/>
        </div>
        
        <ExpandButton expand={expand} setExpand={setExpand}/>

        {expand && <div className="bg-gray-100 rounded-lg text-left p-8 slide-animation">
          <h2 className="text-xl text-center my-2 fade-in-text">Description</h2>
          {experienceEntry.description.map((entry, index) => <p className="font-average sm:text-xl p-2 fade-in-text" key={index}>{entry}</p>)}
        </div>}
      </div>
    </div>
  );
}

export default ExperienceEntry;
