import React, { useState } from "react";
 import {useDispatch,useSelector} from 'react-redux'
import { addTodo, updateTodo } from "../feature/Todo/Todo";

function Todo(){

    const [input,setInput] = useState("")
    const dispatch = useDispatch()
   

    return(
        

      <form onSubmit={(e)=>{
       
            e.preventDefault()
             if(input==="") return
            dispatch(addTodo(input))
           
            setInput("")
            
        }}>


      <div className="flex items-center justify-center mt-8 ">
        <div className="flex items-center space-x-4 w-full max-w-3xl">
          <input
            type="text"
            placeholder="📝 Add..."
            className="flex-1 px-6 py-3 text-lg
                       border border-gray-300 rounded-full shadow
                       focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            
          />

          <button
            className="px-8 py-3 text-lg font-semibold
                       bg-orange-500 text-white
                       rounded-full shadow-md
                       hover:bg-orange-600
                       active:scale-95
                       transition-all duration-200 cursor-pointer "
                       type="submit"
                      

          >
             Add
          </button>

        </div>
        </div>


      </form>
        
    )
}
 
export default Todo