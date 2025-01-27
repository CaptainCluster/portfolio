import BackButton from "../../components/BackButton";
import PageTitle                from "../../components/PageName";
import ProjectYearInterface     from "../../models/interfaces/ProjectYearInterface";
import { findProjectsForYears } from "../../utils/findProjectsForYears";
import { sortYears }            from "../../utils/sortYears";
import ProjectEntry             from "./ProjectEntry";
import { useState, useEffect }  from "react";

const Projects = () => {

  const [projectYear, setProjectYear] = useState<ProjectYearInterface[]>([]);

  useEffect(() => {
    const yearsArray = sortYears();
    const projectYearPreliminary = findProjectsForYears(yearsArray);
    setProjectYear(projectYearPreliminary);
  }, [])

  return(
    <div className="projects-page h-screen bg-gray-100 fade-in overflow-scroll">
      <BackButton />
      <PageTitle pageTitle="Projects"/>
      <div className="grid grid-cols-1 gap-10 p-10 max-w-7xl mx-auto">
        {projectYear.map((projectYearEntry) => (
          <>
            <h2 className="text-center text-2xl mb-5">{projectYearEntry.year}</h2>
            <>
              {projectYearEntry.projects.map((projectEntry) => (
                <ProjectEntry 
                  name={projectEntry.name} 
                  images={projectEntry.images} 
                  technologies={projectEntry.technologies}
                  status={projectEntry.status}
                  description={projectEntry.description}
                  links={projectEntry.links}
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
