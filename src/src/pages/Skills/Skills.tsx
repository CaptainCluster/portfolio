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
        <p className="w-1/2 sm:w-1/4 text-center">
          The skill bars are a reflection of how well I think I am experienced 
          with the skills they revolve around. My confidence regarding them 
          also plays a role in the scores I have given them.
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

