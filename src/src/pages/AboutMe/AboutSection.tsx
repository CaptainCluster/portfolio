import { useState } from "react";
import ExpandButton from "../../components/ExpandButton";
import AboutMeInterface from "../../models/interfaces/AboutMeInterface"; 

const AboutSection = ({ header, textBody }: AboutMeInterface) => {

  const [expand, setExpand] = useState(false);

  const createParagraph = (paragraph: string) => {
    return <p className="font-serif text-left md:text-xl px-6 py-1.5 fade-in-text">{paragraph}</p>
  }

  return (
    <div className="bg-white text-center rounded-lg shadow-lg transform transition-transform md:hover:scale-105">
      <div className="p-5 md:py-6">
        <h1 className="font-bold text-xl md:text-2xl py-4 text-center">{header}</h1>
        <ExpandButton expand={expand} setExpand={setExpand}/>
        {
          expand && 
          <div className="bg-gray-100 p-5">
            {textBody.map(textBodyElement => createParagraph(textBodyElement))} 
          </div>
        }
      </div>
    </div>
  )
}

export default AboutSection;
