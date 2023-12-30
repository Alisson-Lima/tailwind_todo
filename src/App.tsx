import AddTask from './components/AddTask'
import TasksTable from "./components/TasksTable"
import {TaskContextProvider} from "./context/TaskContext"

function App() {

  return (
    <div 
      className="w-screen h-screen flex items-center justify-center flex-col space-y-8 bg-gray-100"
    >
      <div className="todo_container max-w-[456px] w-full relative flex-col flex gap-4">
        <TaskContextProvider>
          <AddTask/>
          <TasksTable/>
        </TaskContextProvider>
      </div>
    </div>
  )
}

export default App
