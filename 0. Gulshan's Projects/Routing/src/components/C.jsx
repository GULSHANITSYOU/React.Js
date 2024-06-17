import {Link ,Outlet} from "react-router-dom";

const C = () => {
    return (
      <div className="h-full flex  justify-center items-center w-full ">
     
        <h1 className="mx-32">C</h1>
        <p>
        <Link to="/D">→</Link>
        </p>
      </div>
    );
  };
  
  export default C;
  