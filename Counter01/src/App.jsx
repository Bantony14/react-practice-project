import { useState } from 'react'

import './App.css'



function App() {

  let [msg,setMsg] = useState("");
 
 
let [counter,setCounter] = useState(0)

  function increase(){
    if(counter<20){
    setCounter(counter+1)
    setMsg("")
    
    } 
     else if(counter==20){
      setMsg("You Can't Incrase more Than 20")
      setCounter(0)
     }
   
  }

  function decrease(){
    if(counter>0){
    setCounter(counter-1)
    setMsg("")
    }
    else{
      setMsg("You Can't decrase less Than 0")
    }
  }

  return (
    <>

     <h1 className='bg-blue-500'>Counter Value :{counter} </h1>
     <button onClick={increase}>Increase Value</button>
     <button onClick={decrease}>Decrease Value</button>
     <p>{msg}</p>
    
    </>
  )
}

export default App
