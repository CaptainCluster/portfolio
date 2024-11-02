import PageTitle from "../../components/PageName";
import { projectsData } from "../../data/projects";
import ProjectYearInterface from "../../models/interfaces/ProjectYearInterface";
import ProjectEntry from "./ProjectEntry";
import { useState, useEffect } from "react";

const Projects = () => {

  const [years, setYears]                       = useState<number[]>([]);
  const [projectYear, setProjectYear] = useState<ProjectYearInterface[]>([]);

  useEffect(() => {
    const yearsSet = new Set<number>;
    projectsData.forEach(projectEntry => {
      if(!yearsSet.has(projectEntry.year)) {
        yearsSet.add(projectEntry.year);
      }
      const yearsArray: number[] = Array.from(yearsSet);
      yearsArray.sort((a, b) => b - a);
      setYears(yearsArray);
    })
  }, [])

  useEffect(() => {    
    const projectYearPreliminary: ProjectYearInterface[] = [];
    years.forEach(year => {
      const projectYearEntry: ProjectYearInterface = {
        "year":     year,
        "projects": []
      }
      projectsData.forEach(projectEntry => {
        if (projectEntry.year === year) {
          projectYearEntry.projects.push(projectEntry);
        }
      });
      projectYearPreliminary.push(projectYearEntry);
    });
    setProjectYear(projectYearPreliminary);
  }, [years])

  return(
    <div className="projects-page h-screen bg-gray-100 fade-in overflow-scroll">
      <PageTitle pageTitle="Projects"/>
      <div className="grid grid-cols-1 gap-10 p-10 max-w-7xl mx-auto">
        {projectYear.map((projectYearEntry) => (
          <>
            <h2 className="text-center text-2xl">{projectYearEntry.year}</h2>
            <>
              {projectYearEntry.projects.map((projectEntry) => (
                <ProjectEntry 
                  name={projectEntry.name} 
                  images={projectEntry.images} 
                  technologies={projectEntry.technologies}
                  status={projectEntry.status}
                  description={projectEntry.description}
                />
              ))}
            </>
          </>
        ))}
      </div>
    </div>
  )
}

export default Projects;
