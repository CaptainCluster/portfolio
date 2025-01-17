import React            from "react";
import FrontPageHeader  from "./FrontPageHeader";
import PageSelector     from "../../components/PageSelect/PageSelector";
import FrontPageDescription from "./FrontPageDescription";

const FrontPage: React.FC = () => {
  return (
    <div className="front-page h-screen overflow-scroll fade-in bg-gray-100">
      <FrontPageHeader />
      <FrontPageDescription />
      <PageSelector />
    </div>
  );
}

export default FrontPage;
