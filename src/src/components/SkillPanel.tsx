import { skillPanelData } from "../data/skillpanel";

const SkillPanel = ({skillName}: {skillName: string}) => {
  const DEFAULT_TEXT: string = "No description defined for this skill.";
  return (
    <div className="slide-animation font-serif">
      {skillPanelData[skillName] === undefined  
        ? <p className="fade-in-text pt-3">{DEFAULT_TEXT}</p>
        : skillPanelData[skillName].map((paragraph, index) => <p className="font-average fade-in-component pt-3" key={index}>{paragraph}</p>) 
      }
    </div>
  )
} 

export default SkillPanel;
