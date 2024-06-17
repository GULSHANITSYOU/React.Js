
import {Link , Outlet} from "react-router-dom";
const D = () => {
    return (
      <div className="h-full flex  justify-center items-center w-full ">
      
        <Outlet/>
        <h1 className="mx-32">D</h1>
        <p>
        <Link to="3">→</Link>
        </p>
      </div>
    );
  };
  
  export default D;
  