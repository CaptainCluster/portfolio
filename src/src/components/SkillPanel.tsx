import { skillPanelData } from "../data/skillpanel";

const SkillPanel = ({skillName}: {skillName: string}) => {
  const DEFAULT_TEXT: string = "No description defined for this skill.";
  return (
    <div className="slide-animation">
      {skillPanelData[skillName] === undefined  
        ? <p className="fade-in-text">{DEFAULT_TEXT}</p>
        : skillPanelData[skillName].map((paragraph, index) => <p className="fade-in-component" key={index}>{paragraph}</p>) 
      }
    </div>
  )
} 

export default SkillPanel;
