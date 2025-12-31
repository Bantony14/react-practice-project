import { UserContext } from "../../../Context/UserContext";
import { useContext } from "react";
function NameOfProfile(){
    const{username}  = useContext(UserContext)
    return(
       <p>name : {username}</p> 
    )
}

export default NameOfProfile;