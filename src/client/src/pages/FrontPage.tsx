import FrontPageHeader from "../components/FrontPageHeader";
import PageTitle from "../components/PageName";
import PageSelector from "../components/PageSelector";

const FrontPage = () => {
  return (<div className="front-page">

    <PageTitle pageTitle="Front Page" />
    <FrontPageHeader />
    <PageSelector />
  </div>);
}

export default FrontPage;
