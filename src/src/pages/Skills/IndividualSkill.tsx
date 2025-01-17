import { useState, useEffect }  from "react";
import SkillPanel               from "../../components/SkillPanel";

/**
 * A component that displays the skill proficiency of a 
 * specified skill.
 */ 
const IndividualSkill = ({skillName, skillProficiency}: {skillName: string, skillProficiency: number}) => {
  const [proficiencyFormatted, setProficiencyFormatted] = useState("");
  const [hoveredOver, setHoveredOver]                   = useState(false);

  useEffect(() => {
    const formatted = (skillProficiency * 10).toString();
    setProficiencyFormatted(`${formatted}%`);
  }, []);

  return (
    <div className="grid mt-2 mb-2">
       <div className="flex items-center justify-center"> 
        <div className="w-2/5">
          <div className="mb-1 text-lg font-serif text-center" 
            onMouseEnter={() => setHoveredOver(true)} 
            onMouseLeave={() => setHoveredOver(false)}>{skillName}</div>
          <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700"> 
            <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: proficiencyFormatted }}></div> 
          </div> 
          {hoveredOver && <SkillPanel skillName={skillName.toLowerCase()} />}
        </div> 
      </div>
    </div>
  );
}
export default IndividualSkill;
