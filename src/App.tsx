import AddTask from './components/AddTask'
import TasksTable from "./components/TasksTable"
import TaskContext from "./context/TaskContext"

function App() {

  const initialTasks: string[] = ["Fazer academia", "Lavar a louça", "Estudar Tailwind"]

  return (
    <div 
      className="w-screen h-screen flex items-center justify-center flex-col space-y-8 bg-gray-100"
    >
      <div className="todo_container max-w-[456px] w-full relative flex-col flex gap-4">
        <TaskContext.Provider value={initialTasks.reverse()}>
          <AddTask/>
          <TasksTable/>
        </TaskContext.Provider>
      </div>
    </div>
  )
}

export default App
