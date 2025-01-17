import TypewriterComponent from "typewriter-effect";

const FrontPageDescription = () => {
  const typewriterDescription: string = "<span>Software Engineer, </span> <p></p> <span>Web Developer, <p></p> </span> <span>Problem Solver</span>" 

  return (
    <div className="flex justify-center typewriter-container mt-10">
      <div className="text-center font-serif">
        <TypewriterComponent 
          onInit={(typewriter) => {
            typewriter
              .typeString(typewriterDescription)
              .start()
          }}
        />
      </div>
    </div>
  );
}

export default FrontPageDescription;
