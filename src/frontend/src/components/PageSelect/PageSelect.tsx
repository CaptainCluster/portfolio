import PageSelectInterface from "../../interfaces/PageSelectInterface";

const PageSelect = ({pageTitle, pageBio, pageUrl}: PageSelectInterface) => {
  
  // Redirecting to the url when client clicks the component
  const handleClick = () => {
    window.location.href = pageUrl;
  }

  return(
    <div className="page-select p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center" onClick={handleClick}>
      <h2 className="text-2xl font-bold mb-4">{pageTitle}</h2>
      <span className="font-serif text-gray-700">{pageBio}</span>
    </div>
  )
}
export default PageSelect;
