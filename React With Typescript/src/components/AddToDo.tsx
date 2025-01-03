import { FormEvent, useState } from "react";
import { useTodo } from "../store/todos";

function AddToDo() {
  const [todo, setTodo] = useState('');
  const {handleAddTodo} = useTodo();

  const handleFormSubmit = (e:FormEvent<HTMLElement>) => {
      e.preventDefault();
      handleAddTodo(todo)
      setTodo('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" name="" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo;