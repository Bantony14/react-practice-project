

import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserProvider from './Context/UserContext'



function App() {

  return (
   <UserProvider>
    <Login/>
    <Profile/>
   </UserProvider>
    
  )
}

export default App
