import React            from "react";
import FrontPageHeader  from "./FrontPageHeader";
import PageTitle        from "../../components/PageName";
import PageSelector     from "../../components/PageSelect/PageSelector";

const FrontPage: React.FC = () => {
  return (
    <div className="front-page fade-in bg-gray-100">
      <PageTitle pageTitle="Front Page" />
      <FrontPageHeader />
      <PageSelector />
    </div>
  );
}

export default FrontPage;
