import React , {useContext , } from "react";
import userContext from "../context/UserContext";


const Profile = () => {
    const {user} = useContext(userContext); 

    if(!user) return <h1>Please Login 🙏🏼</h1>

    return (
        <>
        <h1>Welcome {user.username} ❣️🥳🥳</h1>

        </>
    )
}
 
export default Profile;