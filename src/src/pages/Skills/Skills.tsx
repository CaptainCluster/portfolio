import React, { useState, useEffect } from "react";

import SkillArea          from "./SkillArea";
import SkillAreaInterface from "../../models/interfaces/SkillArea";
import PageTitle          from "../../components/PageName";
import { getSkillAreas }  from "../../utils/getSkillAreas";
import { findSkillsForAreas } from "../../utils/findSkillsForAreas";

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillAreaInterface[]>([]);

  useEffect(() => {
    const areas = getSkillAreas();
    const uniqueSkills: Set<SkillAreaInterface>  = findSkillsForAreas(areas);
    setSkills(Array.from(uniqueSkills));
  }, []);

  return (
    <div className="h-screen skills-page fade-in bg-gray-100 overflow-scroll">
      <PageTitle pageTitle="Skills" />
      <div className="items-center h-screen">
        <div className="grid gap-10 mt-10">
          {skills.map((skill) => (
            <SkillArea key={skill.area} area={skill.area} skills={skill.skills}/>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

