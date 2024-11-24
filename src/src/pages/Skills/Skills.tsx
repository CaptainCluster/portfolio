import React, { useState, useEffect } from "react";

import { skillsData }     from "../../data/skills";
import SkillArea          from "./SkillArea";
import SkillAreaInterface from "../../models/interfaces/SkillArea";
import PageTitle from "../../components/PageName";

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
    setSkills(Array.from(uniqueSkills));
  }, [areas]);

  return (
    <div className="h-screen skills-page fade-in bg-gray-100 overflow-scroll">
      <PageTitle pageTitle="Skills" />
      <div className="items-center h-screen">
        <div className="grid gap-10 mt-10">
          {skills.map((skill) => (
            <SkillArea area={skill.area} skills={skill.skills}/>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

