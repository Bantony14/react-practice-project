import { createContext, useState } from "react";

export const UserContext = createContext()

function UserProvider({children}){
    const [toggle,setToggle] = useState(false)

    return(
        <UserContext.Provider value={{toggle,setToggle}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;