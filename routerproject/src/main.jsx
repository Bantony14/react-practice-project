import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from './component/About/About.jsx';
import Home from './component/Home/Home.jsx';
import Contact from './component/Contact/Contact.jsx';
import User from './component/User/User.jsx';
import Github from './component/Github/Github.jsx';
import { GitApiCall } from './component/Github/GitApiCall.jsx';


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>,

//     children :[
//       {
//       index : true,
//       element : <Home/>
//     },

//     {
//       path : 'about',
//       element : <About/>
//     },

//      {
//       path : 'contact',
//       element : <Contact/>
//     }
  
//   ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='/' element = {<Home/>}/>
         <Route 
         path='about' 
         element = {<About/>}>
          <Route path='user/:userid' element = {<User/>}/>
          <Route path='login' element = {<Contact/>}/>
         </Route>
          <Route path='contact' element = {<Contact/>}/>   
           <Route path='user/:userid' element =  {<User/>}/> 
           <Route 
           loader = {GitApiCall}
           path='github' 
            element = {<Github/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
