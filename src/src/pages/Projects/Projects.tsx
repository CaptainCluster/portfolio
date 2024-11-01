import PageTitle from "../../components/PageName";
import { projectsData } from "../../data/projects";
import ProjectEntry from "./ProjectEntry";

const Projects = () => {
  return(
    <div className="projects-page h-screen bg-gray-100 fade-in overflow-scroll">
      <PageTitle pageTitle="Projects"/>
      <div>
        {projectsData.map((projectEntry) => (
          <ProjectEntry 
            name={projectEntry.name} 
            images={projectEntry.images} 
            technologies={projectEntry.technologies}
            status={projectEntry.status}
            description={projectEntry.description}
            />
        ))}
      </div>
    </div>
  )
}

export default Projects;
