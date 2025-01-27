import ExpandButton from "../../components/ExpandButton";
import SkillBadgeHolder from "../../components/SkillBadgeHolder";
import ProjectEntryInterface    from "../../models/interfaces/ProjectEntryInterface";
import { useState, useEffect }  from "react";

const ProjectEntry = ({ name, images, technologies, status, description, links }: ProjectEntryInterface) => {

  const [linksSectionTitle, setLinksSectionTitle] = useState<string>("");
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (links.length > 0) {
      setLinksSectionTitle("Links");
    }
  }, []);

  const imgDirectory: string = "../src/assets/"
  return (
    <div className="font-serif p-5 text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="">
        <h1 className="text-2xl mb-5">{name}</h1>
        <div className="grid bg-gray-100 rounded-lg p-8">
          <h2 className="mb-6 text-xl">Technologies used</h2>
          <SkillBadgeHolder skills={technologies}/>
        </div>
        <div className="p-3">
          <h2 className="text-xl">Status</h2>
          <p>{status}</p>
        </div>
        <div>
          <h2 className="text-xl">{linksSectionTitle}</h2>
          {links.map((link) => (<a className="text-blue-500" href={link.url}>{link.shortUrl}</a>))}
        </div>
      </div>
      <ExpandButton expand={expand} setExpand={setExpand}/>
      {
        expand &&
        <div className="bg-gray-100 slide-animation p-5">
          {description.map((descriptionEntry) => (<p className="text-left font-average sm:text-xl p-5 fade-in-text">{descriptionEntry}</p>))}
          <div className="mb-5">
            {images.map((imageEntry) => (<img className="rounded-lg fade-in-text mb-3 sm:mb-8 border border-gray-200" src={imgDirectory + imageEntry.src} alt={imageEntry.alt}/>))}
          </div>
        </div>
      }
    </div>
  )
}

export default ProjectEntry;
