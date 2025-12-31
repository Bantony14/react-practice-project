import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
