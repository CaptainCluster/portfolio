import PageSelect from "./PageSelect";
import PageSelectInterface from "../../models/interfaces/PageSelectInterface";

import { selectablePages } from "../../data/pageSelect";

/**
 * Creating a PageSelect component with title and bio given as parameters
 *
 * @args 
 * pageTitle: the title of the page 
 * pageBio:   the bio of the page
 */ 
const createSelectablePage = ({pageTitle, pageBio, pageUrl}: PageSelectInterface, index: number) => {
  return <PageSelect key={index} pageTitle={pageTitle} pageBio={pageBio} pageUrl={pageUrl}/>
}

/**
 * @component PageSelector
 *
 * The component that has all the PageSelect components wrapped conveniently.
 */
const PageSelector = () => {
  return(
    <div className="grid items-center justify-center h-screen bg-gray-100 fade-in-component mt-8 sm:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6"> 
        {selectablePages.length === 0 
          ? <p>No pages available</p>
          : selectablePages.map((selectablePage, index) => createSelectablePage(selectablePage, index))
        }
      </div>
    </div>
  )
}
export default PageSelector;
