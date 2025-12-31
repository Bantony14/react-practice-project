import { useState } from 'react'


function App() {
  const [inputValue,setInputValue]  = useState("")
  const [addTodoList,setAddTodoList] = useState([])


  function clearAllTodos(){
    setAddTodoList([])
  }

  function AddTodo(){

    if(inputValue==="") return
    setAddTodoList((prev)=>
      [{
      id : Date.now(),
      text : inputValue.toUpperCase(),
      isComplete : false,
      isDone : false
    },...prev]
  )
setInputValue("")

  }

  function Delete(id){
    setAddTodoList((prev)=>
    prev.filter((todos)=> todos.id !== id ))
  }


  function UpdateTodo(id,newValue){
    setAddTodoList((prev)=>
    prev.map((todos)=>
    todos.id === id
    ? {...todos, text : newValue.toUpperCase()
     }
    : todos
)
    )
  }


  function ChangeState(id){
    setAddTodoList((prev)=>
    prev.map((todos)=>
    todos.id === id 
    ? {...todos, isComplete : !todos.isComplete ,textBackup: todos.text}
    : todos
    )
    
    )
  }

  function Done(id){
    setAddTodoList((prev)=>
      prev.map((todos)=> todos.id===id
  ?{...todos,isDone : !todos.isDone}
  : todos
  )
   
    )
  }

  function FinishEdit(id) {
  setAddTodoList((prev) =>
    prev.map((todos) =>
      todos.id === id
        ? {
            ...todos,
            text:
              todos.text.trim() === ""
                ? todos.textBackup
                : todos.text.toUpperCase(),
            isComplete: !todos.isComplete,
          }
        : todos
    )
  )
}




  return (
   <>

 <form onSubmit={(e)=>{
            e.preventDefault()
            AddTodo()
        }}>
      <div className="flex items-center justify-center mt-8 ">
        <div className="flex items-center space-x-4 w-full max-w-3xl">
          <input
            type="text"
            placeholder="📝 Add..."
            className="flex-1 px-6 py-3 text-lg
                       border border-gray-300 rounded-full shadow
                       focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            
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

          <button  className="px-8 py-3 text-lg font-semibold
                       bg-orange-500 text-white
                       rounded-full shadow-md
                       hover:bg-orange-600
                       active:scale-95
                       transition-all duration-200 cursor-pointer " onClick={()=> { if( addTodoList==="") return
                        clearAllTodos()}}
                        type='button'
                       >

                        
            Clear All List
          </button>
        </div>

      </div>

      <div className=" flex items-center justify-center mt-5 flex-col gap-4 ">

        {addTodoList.map((Alltodo)=>
           <div key={Alltodo.id}  className="flex items-center gap-16 w-190 bg-amber-500 justify-between rounded-2xl p-2.5  ">
            <input type="checkbox"  
            onChange={()=>Done(Alltodo.id)}
            />

          {Alltodo.isComplete ?(
            <input className=' flex-1 px-6 py-3 text-lg
                       border border-gray-300 rounded-full shadow
                       focus:outline-none focus:ring-2 focus:ring-orange-500 text-center  ' type="text"
            value={Alltodo.text}
            onChange={(e)=>{
              UpdateTodo(Alltodo.id,e.target.value)}}
                onBlur={() => FinishEdit(Alltodo.id)}
            autoFocus
            
            />
          )
         :(
             <p className={Alltodo.isDone ? "opacity-40 line-through" : ""} >{Alltodo.text}</p>
          )
        }

           
            <div className=' flex gap-3 '>
               <p className={Alltodo.isDone ?  "opacity-40 cursor-not-allowed" : "cursor-pointer" } onClick={()=>{
                if(Alltodo.isDone) return
                ChangeState(Alltodo.id)}}> {Alltodo.isComplete?"📁": "✏"}</p>
            <p className=' cursor-pointer ' onClick={()=>Delete(Alltodo.id)}>❌</p>
            </div>
           
           
           </div>)}
      </div>
      </form>
    


   </>
   
  )
}

export default App
