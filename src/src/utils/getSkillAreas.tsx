import { skillsData } from "../data/skills";

export const getSkillAreas = () => {
  const uniqueAreas = new Set<string>();    
  skillsData.forEach(skill => {
    skill.areas.forEach(area => {
      uniqueAreas.add(area);
    });
  });
  return uniqueAreas
}
