import {Link,Outlet} from "react-router-dom";


const A = () => {
  return (
    <div className="h-full flex  justify-center items-center w-full ">
    
      <h1 className="mx-32">A</h1>
      <p>
        <Link to="/B">→</Link>
      </p>
    </div>
  );
};

export default A;
