import PageSelect from "./PageSelect";
import PageSelectInterface from "../interfaces/PageSelectInterface";
 
const selectablePages: PageSelectInterface[] = [
  {
    pageTitle: "Projects",
    pageBio: "Here are some of my notable projects."
  },
  {
    pageTitle: "Skills",
    pageBio: "Here are some of my software engineering skills."
  }
] 

const createSelectablePage = ({pageTitle, pageBio}: PageSelectInterface) => {
  return <PageSelect pageTitle={pageTitle} pageBio={pageBio}/>
}

const PageSelector = () => {
  return(
    <div className="page-selector">
      {selectablePages.length === 0 
          ? <p>No pages available</p>
          : selectablePages.map(selectablePage => createSelectablePage(selectablePage))
      }
    </div>
  )
}
export default PageSelector;
