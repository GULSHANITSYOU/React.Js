import {Link,Outlet} from "react-router-dom";

const B = () => {
    return (
      <div className="h-full flex  justify-center items-center w-full ">
      
        <h1 className="mx-32">B</h1>
        <p>
        <Link to="/C">→</Link>
        </p>
      </div>
    );
  };
  
  export default B;
  