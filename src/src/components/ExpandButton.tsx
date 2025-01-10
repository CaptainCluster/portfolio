import React, { useState } from "react";

const ExpandButton = ({ expand, setExpand }: { expand: boolean, setExpand: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [buttonTitle, setButtonTitle] = useState("Expand");
  return (
    <button 
      className="bg-gray-100 border rounded-lg p-2 w-full border-gray-300 my-4" 
      onClick={() => {
        const newTitle: string = buttonTitle === "Expand" ? "Hide" : "Expand";
        setButtonTitle(newTitle);
        setExpand(!expand);
      }}>
      <p className="transform transition-transform hover:scale-105">{buttonTitle}</p>
    </button>
  )
}

export default ExpandButton;
