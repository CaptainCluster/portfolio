import AboutMeInterface from "../../interfaces/AboutMeInterface"; 

const AboutSection = ({ header, textBody }: AboutMeInterface) => {

  const createParagraph = (paragraph: string) => {
    return <p className="font-serif px-6 py-1.5">{paragraph}</p>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <h2 className="font-bold py-4 text-center">{header}</h2>
      {textBody.map(textBodyElement => createParagraph(textBodyElement))} 
    </div>
  )
}

export default AboutSection;
