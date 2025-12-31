
import Card from "./component/Card/Card";
import ThemeBtn from "./component/Swicthbttn/Switchbttn";
import UserProvider, { UserContext } from "./context/Context";

function App(){


  return(
<UserProvider>
<div className="flex flex-wrap min-h-screen items-center  ">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      
                         <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card src = {"https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
                      <Card src = {"https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="}/>
                 
                      
                       
                    </div>
                </div>
            </div>
            </UserProvider>


  )
}

export default App;