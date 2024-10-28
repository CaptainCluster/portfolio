import React, { useState, useEffect } from "react";

import { skillsData }     from "../../data/skills";
import SkillArea          from "./SkillArea";
import BackButton         from "../../components/BackButton";
import SkillAreaInterface from "../../models/interfaces/SkillArea";

const Skills: React.FC = () => {
  const [areas, setAreas]   = useState<string[]>([]);
  const [skills, setSkills] = useState<SkillAreaInterface[]>([]);

  useEffect(() => {
    const uniqueAreas = new Set<string>();
    skillsData.forEach(skill => {
      skill.areas.forEach(area => {
        uniqueAreas.add(area);
      });
    });
    setAreas(Array.from(uniqueAreas));
    
  }, []);

  useEffect(() => {
    const uniqueSkills = new Set<SkillAreaInterface>();
    areas.forEach(area => {
      const skillDisplayEntry: SkillAreaInterface = {
        "area":   area,
        "skills": [],
      }
      skillsData.forEach(skill => {
        if (skill.areas.includes(area)) {
          skillDisplayEntry.skills.push(skill.name); 
        }
      });
      uniqueSkills.add(skillDisplayEntry)
    });
    setSkills(Array.from(uniqueSkills));
  }, [areas]);

  return (
    <div className="skills-page fade-in">
      <BackButton />
      <div className="justify-center items-center h-screen">
        <div className="grid grid-cols-1 gap-10">
          {skills.map((skill) => (
            <SkillArea area={skill.area} skills={skill.skills}/>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

