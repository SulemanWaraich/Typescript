import { useSearchParams } from 'react-router-dom';
import { Todo, useTodo } from '../store/todos'

function Todos() {
  const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodo();
  const [searchParams] = useSearchParams();

  const todosData = searchParams.get('todos')
  let filterData = todos;

  if(todosData === 'active'){
    filterData =  filterData.filter((item) => !item.completed)
  }

  if(todosData === 'completed'){
    filterData = filterData.filter((item) => item.completed)
  }

  return (
    <ul className="main-task">
      {
        filterData.map((item: Todo) => {
          return <li key={item.id}>
            <input type="checkbox" id={item.id} checked={item.completed} onChange={()=> toggleTodoAsCompleted(item.id)}/>
            <label htmlFor={item.id}>{item.task}</label>
            {
              item.completed && <button type='button' onClick={()=> handleDeleteTodo(item.id)}>Delete</button>
            }
          </li>
        })
      }
    </ul>
  )
}

export default Todos