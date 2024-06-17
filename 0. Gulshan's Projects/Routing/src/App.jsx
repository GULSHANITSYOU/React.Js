
import { Outlet , Link } from "react-router-dom";

  

function App() {
  return (
    <main className="flex flex-col pt-4 items-center w-screen h-screen bg-black text-white text-8xl font-bold">
      <div className=" w-full flex justify-center">
        <ul className="flex gap-12 bg-emerald-500 px-48 rounded-md ">
          <li>
            <Link to='/'>A</Link>
            
          </li>
          <li>
          <Link to='B'>B</Link>
          
          </li>
          <li>
          <Link to='C'>C</Link>
          </li>
          <li>
          <Link to='D'>D</Link>
          </li>
        </ul>
      </div>
      
      <Outlet />
    </main>
  );
}

export default App;
