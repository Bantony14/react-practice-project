import { useState } from "react";

function ColorChange(){
  const [color,setColor] = useState("white")

 

  function Color(e){
    setColor(e.target.innerHTML)
     
  }


  return(
    
    <div className="w-screen h-screen flex justify-center items-end p-6 flex-wrap " style={{backgroundColor : color}}>
      
      
        <div className=" flex flex-wrap gap-9 bg-white  w-4xl justify-center items-center rounded-2xl h-10" >
          <button className="bg-red-500 w-20 rounded-xl" onClick={Color}>Red</button>
          <button className=" bg-green-700 w-20 rounded-xl" onClick={Color}>Green</button>
           <button  className="  bg-blue-700 w-20 rounded-xl" onClick={Color}>Blue</button>
          <button  className=" bg-lime-900 w-20 rounded-xl" onClick={Color}>Olive</button>
           <button  className=" bg-gray-700 w-20 rounded-xl"  onClick={Color}>Gray</button>
          <button  className="  bg-yellow-500 w-20 rounded-xl" onClick={Color}>Yellow</button>
           <button  className="  bg-black w-20 rounded-xl text-white" onClick={Color}>Black</button>

          
         
         
      </div>

    </div>
    


  )
}

export default ColorChange