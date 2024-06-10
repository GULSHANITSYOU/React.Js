const Button = ({ bgcolor, buttonName }) => {

    function Change(elem){
      console.log(elem.target.style.backgroundColor);
      document.querySelector('body').style.backgroundColor = elem.target.style.backgroundColor
    }
  return (
    <>
      <button
        onClick={Change}
        style={{ backgroundColor: bgcolor }}
        className="bg-blue-500 hover:bg-blue-700 hover:scale-110 transition-all text-white font-bold py-2 px-4 rounded">
        {buttonName}
        
      </button>
    </>
  );
};

export default Button;
