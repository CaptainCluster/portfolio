import React            from "react";
import FrontPageHeader  from "./FrontPageHeader";
import PageSelector     from "../../components/PageSelect/PageSelector";

const FrontPage: React.FC = () => {
  return (
    <div className="front-page fade-in bg-gray-100 overflow-scroll">
      <FrontPageHeader />
      <PageSelector />
    </div>
  );
}

export default FrontPage;
