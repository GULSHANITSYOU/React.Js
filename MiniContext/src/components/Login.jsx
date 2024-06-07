import React , {useContext , useState} from "react";
import userContext from "../context/UserContext";



const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const {setUser} = useContext(userContext);

    const handlSubmit =(e)=>{
        e.preventDefault(); 
        setUser({username ,password})

    }
    return ( <>
        <div className="loginPage">

         <h2>Login</h2>
         <input 
         required
         value={username}
         onChange={(e)=> setusername(e.target.value)}
         type="text" placeholder="userName" />

         <input
         required 
         value={password}
         onChange={(e)=> setpassword(e.target.value)}
         type="password" placeholder="Password" />
         <button onClick={handlSubmit} >Submit</button>
        
        </div>

        </>
     );
}
 
export default Login;