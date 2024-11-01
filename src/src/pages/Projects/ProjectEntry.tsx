import ProjectsInterface from "../../models/interfaces/ProjectsInterface";

const ProjectEntry = ({ name, images, technologies, status, description }: ProjectsInterface) => {

  return (
    <div className="text-center w-screen">
      {name}
    </div>
  )
}

export default ProjectEntry;
