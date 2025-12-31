import { useSelector, useDispatch } from "react-redux"
import { updateTodo } from "../feature/Todo/Todo"
import { useState } from "react"

function TodoList() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")


  return (
    <div className="max-w-2xl mx-auto mt-6">
      {todos.map(todo => (
        <div
          key={todo.id}
          className="flex items-center justify-between gap-4 bg-gray-100 p-4 mb-3 rounded-lg shadow-sm"
        >
          {/* TEXT / INPUT */}
          {editId === todo.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 px-3 py-2 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              autoFocus
            />
          ) : (
            <p className="flex-1 text-lg font-medium text-gray-800">
              {todo.text}
            </p>
          )}

          {/* EDIT / SAVE BUTTON */}
          {editId === todo.id ? (
            <button
              onClick={() => {
                
                dispatch(updateTodo({ id: todo.id, text: editText.trim() ===""? todo.text : editText  }))
                setEditId(null)
              }}
              className="text-green-600 hover:text-green-800 text-xl font-semibold"
            >
              ✔
            </button>
          ) : (
            <button
              onClick={() => {
               
                setEditId(todo.id)
                setEditText(todo.text)
               
              }}
              className="text-blue-600 hover:text-blue-800 text-xl"
            >
              ✏
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoList
