import React, { useState, useEffect } from "react";
import SkillArea                      from "./SkillArea";
import SkillAreaInterface             from "../../models/interfaces/SkillArea";
import PageTitle                      from "../../components/PageName";
import { getSkillAreas }              from "../../utils/getSkillAreas";
import { findSkillsForAreas }         from "../../utils/findSkillsForAreas";
import BackButton from "../../components/BackButton";

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillAreaInterface[]>([]);

  useEffect(() => {
    const areas = getSkillAreas();
    const uniqueSkills: Set<SkillAreaInterface>  = findSkillsForAreas(areas);
    setSkills(Array.from(uniqueSkills));
  }, []);

  return (
    <div className="h-screen skills-page fade-in bg-gray-100 overflow-scroll">
      <BackButton />
      <PageTitle pageTitle="Skills" />
      <div className="flex justify-center">
        <p className="w-3/4 sm:w-1/4 text-center skill-info">
          This page contains information regarding what skills I have used. The blue
          bars are a reflection of how confident and proficient I am with certain 
          skills.
        </p>
      </div>
      <div className="items-center">
        <div className="grid gap-10 mt-10 mb-16">
          {skills.map((skill) => (
            <SkillArea key={skill.area} area={skill.area} skills={skill.skills}/>  
          ))}
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
};

export default Skills;

