import React, { useEffect, useState } from "react";

function TodoList(){

const [inputValue,SetInputValue] = useState("")
const [todoLists, SetTodoLists] = useState(() => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoLists));
}, [todoLists]);


function AddList (){

  if(inputValue==="") return


  SetTodoLists((prev) => [
    {
      id: Date.now(),
      text: inputValue.toUpperCase(),
      isEditing: false,
      icon : "✏",
      isDone : false
    },
    ...prev,
  ]);
    SetInputValue("");

}

function toggleEdit(id) {
  SetTodoLists(prev =>
    prev.map(todo =>
      todo.id === id
        ? { ...todo, isEditing: !todo.isEditing }
        : todo
    )
  );
 
}


function updateTodo(id,value) {
 
  SetTodoLists((prev) =>
    prev.map((todo) =>
      todo.id === id
        ? { ...todo, text: value.toUpperCase() }
        : todo
    )
  );
}

function toggleCheck(id){
  SetTodoLists((prev)=>
  prev.map((todo)=>
  todo.id === id
  ?{...todo, isDone : !todo.isDone}
  : todo
)
  )
}

function deleteTodo(id){
  SetTodoLists((prev)=>
  prev.filter((todo)=> todo.id !==id )
)}





    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            AddList()
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
            onChange={(e)=> SetInputValue(e.target.value)}
            
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

      <div className=" flex items-center justify-center mt-5 flex-col gap-4 ">

       {todoLists.map((AllTodos)=>{
        return(
         <div key={AllTodos.id} className="flex items-center gap-16 w-190 bg-amber-500 justify-between rounded-2xl p-2.5  ">  
         <input type="checkbox" 
         checked={AllTodos.isDone}
         onChange={()=>toggleCheck(AllTodos.id)}
         
         />
      {AllTodos.isEditing ? (
  <input
    type="text"
    value={AllTodos.text}
    onChange={(e) => updateTodo(AllTodos.id, e.target.value)}
    autoFocus
  />
) : (
  <p className={AllTodos.isDone?"line-through opacity-60":""}>{AllTodos.text}</p>
)}

       <div className="flex gap-2 "> 
        <p   className={`cursor-pointer ${AllTodos.isDone ? "opacity-40 cursor-not-allowed" : ""}`} onClick={
          ()=>{ 
            if(AllTodos.isDone) return
            toggleEdit(AllTodos.id)}}>{AllTodos.isEditing?"📁":"✏"}</p>
       <p  className=" cursor-pointer " onClick={()=>deleteTodo(AllTodos.id)}>❌</p>

       </div>
       </div>
        )
       })}

      
      </div>
</form>
        

        </>
    )
}

export default TodoList