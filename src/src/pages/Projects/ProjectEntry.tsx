import ProjectEntryInterface from "../../models/interfaces/ProjectEntryInterface";

const ProjectEntry = ({ name, images, technologies, status, description }: ProjectEntryInterface) => {

  const imgDirectory: string = "../src/assets/"

  return (
    <div className="font-serif text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="p-5">
        <h1 className="text-2xl">{name}</h1>
        <div className="p-3">
          <h2 className="text-xl">Technologies used</h2>
          {technologies.map((technologyEntry) => (<p>{technologyEntry}</p>))}
        </div>
        <div className="p-3">
          <h2 className="text-xl">Status</h2>
          <p>{status}</p>
        </div>
      </div>
      <div>
        {description.map((descriptionEntry) => (<p className="p-3">{descriptionEntry}</p>))}
        <div className="mb-5">
          {images.map((imageEntry) => (<img className="p-5" src={imgDirectory + imageEntry.src} alt={imageEntry.alt}/>))}
        </div>
      </div> 
    </div>
  )
}

export default ProjectEntry;
