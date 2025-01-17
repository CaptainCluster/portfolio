import React from "react";

const FrontPageHeader: React.FC = () => {
  const portfolioOwner: string = "Ville Saloranta";
  return(
    <div className="mt-6">
      <h1 className="text-1xl xl:text-2xl font-serif text-center">Welcome to 
        <p className={"text-3xl xl:text-4xl font-serif text-center"}>{portfolioOwner}'s</p>
        portfolio!
      </h1>
    </div>
  )
}

export default FrontPageHeader;
