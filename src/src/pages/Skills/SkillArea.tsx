import SkillAreaInterface from "../../models/interfaces/SkillArea";

const SkillArea = ({area, skills}: SkillAreaInterface) => {
    
  const createSkillElement = (skill: string) => {
    return <p className="font-serif">{skill}</p>
  }

  return (
    <div className="text-center w-screen fade-in-component">
      <h1 className="font-bold font-serif text-xl">{area}</h1>
      <div>
        {skills.map(skill => createSkillElement(skill))}
      </div>
    </div>
  )
}

export default SkillArea;
