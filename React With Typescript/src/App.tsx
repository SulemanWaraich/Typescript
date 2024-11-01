import './App.css'
import AddToDo from './components/AddToDo'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

function App() {

  return (
    <main>
    <h1>Todo React + Typescript</h1>
    <Navbar></Navbar>
    <AddToDo></AddToDo>
    <Todos></Todos>
    </main>
  )
}

export default App
