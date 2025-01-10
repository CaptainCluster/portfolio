import SkillBadgeHolder from "../../components/SkillBadgeHolder";
import ProjectEntryInterface    from "../../models/interfaces/ProjectEntryInterface";
import { useState, useEffect }  from "react";

const ProjectEntry = ({ name, images, technologies, status, description, links }: ProjectEntryInterface) => {

  const [linksSectionTitle, setLinksSectionTitle] = useState<string>("");

  useEffect(() => {
    if (links.length > 0) {
      setLinksSectionTitle("Links");
    }
  }, []);

  const imgDirectory: string = "../src/assets/"
  return (
    <div className="font-serif text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="p-5">
        <h1 className="text-2xl">{name}</h1>
        <div className="p-3">
          <h2 className="text-xl">Technologies used</h2>
          <SkillBadgeHolder skills={technologies}/>
        </div>
        <div className="p-3">
          <h2 className="text-xl">Status</h2>
          <p>{status}</p>
        </div>
        <div>
          <h2 className="text-xl">{linksSectionTitle}</h2>
          {links.map((link) => (<a className="text-blue-500" href={link}>{link}</a>))}
        </div>
      </div>
      <div>
        {description.map((descriptionEntry) => (<p className="p-3">{descriptionEntry}</p>))}
        <div className="mb-5 p-5">
          {images.map((imageEntry) => (<img className="rounded-lg" src={imgDirectory + imageEntry.src} alt={imageEntry.alt}/>))}
        </div>
      </div> 
    </div>
  )
}

export default ProjectEntry;
