import AboutMeInterface from "../../interfaces/AboutMeInterface"; 

const AboutSection = ({ header, textBody }: AboutMeInterface) => {

  const createParagraph = (paragraph: string) => {
    return <p>{paragraph}</p>
  }

  return (
    <div>
      <h2>{header}</h2>
      {textBody.map(textBodyElement => createParagraph(textBodyElement))} 
    </div>
  )
}

export default AboutSection;
