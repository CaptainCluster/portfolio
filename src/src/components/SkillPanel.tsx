import { skillPanelData } from "../data/skillpanel";

const SkillPanel = ({skillName}: {skillName: string}) => {
  const DEFAULT_TEXT: string = "No description defined for this skill.";
  return (
    <div className="fade-in">
      {skillPanelData[skillName] === undefined  
        ? <p>{DEFAULT_TEXT}</p>
        : skillPanelData[skillName].map((paragraph, index) => <p key={index}>{paragraph}</p>) 
      }
    </div>
  )
} 

export default SkillPanel;
