import React from "react";

const FrontPageHeader: React.FC = () => {
  const portfolioOwner: string = "Ville Saloranta";
  return(
    <h1 className="text-1xl font-serif text-center mt-5">Welcome to 
      <h1 className={"text-3xl font-serif text-center"}>{portfolioOwner}'s</h1>
      portfolio!
    </h1>
  )
}

export default FrontPageHeader;
