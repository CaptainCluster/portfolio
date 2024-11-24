import SkillAreaInterface from "../../models/interfaces/SkillArea";
import IndividualSkill from "./IndividualSkill";

const SkillArea = ({area, skills}: SkillAreaInterface) => {
    
  const createSkillElement = (skill: string, proficiency: number) => {
    return <IndividualSkill skillName={skill} skillProficiency={proficiency}/>
  }

  return (
    <div className="text-center w-screen fade-in-component">
      <h1 className="font-bold font-serif text-xl">{area}</h1>
      <div className="items-center w-screen justify-center">
        {skills.map(skill => createSkillElement(skill.name, skill.proficiency))}
      </div>
    </div>
  )
}

export default SkillArea;
