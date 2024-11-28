import SkillAreaInterface from "../models/interfaces/SkillArea";
import { skillsData } from "../data/skills";

export const findSkillsForAreas = (areas: Set<string>) => {
  const uniqueSkills = new Set<SkillAreaInterface>();
  areas.forEach(area => {
    const skillDisplayEntry: SkillAreaInterface = {
      "area":   area,
      "skills": [],
    }
    skillsData.forEach(skill => {
      if (skill.areas.includes(area)) {
        skillDisplayEntry.skills.push({
          name:         skill.name,
          type:         skill.type,
          areas:        skill.areas,
          proficiency:  skill.proficiency
        }); 
      }
    });
    uniqueSkills.add(skillDisplayEntry)
  });
  return uniqueSkills;
}
