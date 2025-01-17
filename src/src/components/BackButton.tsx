const BackButton = () => {
  return (
    <button 
      className="p-2 font-serif ml-2 mt-2 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105" 
      onClick={() => { window.location.href="/"}}>
      {"<-- Back to Front Page"}
    </button>
  )
}

export default BackButton;
