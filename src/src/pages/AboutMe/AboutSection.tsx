import AboutMeInterface from "../../models/interfaces/AboutMeInterface"; 

const AboutSection = ({ header, textBody }: AboutMeInterface) => {

  const createParagraph = (paragraph: string) => {
    return <p className="font-serif text-xl px-6 py-1.5">{paragraph}</p>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <div className="py-6">
        <h1 className="font-bold text-2xl py-4 text-center">{header}</h1>
        {textBody.map(textBodyElement => createParagraph(textBodyElement))} 
      </div>
    </div>
  )
}

export default AboutSection;
