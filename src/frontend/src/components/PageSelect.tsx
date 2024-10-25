import PageSelectInterface from "../interfaces/PageSelectInterface";

const PageSelect = ({pageTitle, pageBio}: PageSelectInterface) => {
  return(
    <div className="page-select">
      <h2>{pageTitle}</h2>
      <span>{pageBio}</span>
    </div>
  )
}
export default PageSelect;
