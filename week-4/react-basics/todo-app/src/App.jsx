import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState([{}]);
  return (
      <div>
        <CreateTodo todos={todos} setTodos={setTodos}/>
      </div>
  )
}

export default App
