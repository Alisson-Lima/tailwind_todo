import AddTask from './components/AddTask'
import SistemMessage from './components/SistemMessage'
import TasksTable from "./components/TasksTable"
import MyContexts from './context/MyContexts'

function App(): React.ReactNode {

  return (
    <div 
      className="w-screen h-screen flex items-center justify-start flex-col space-y-8 bg-gray-100 overflow-y-scroll scrollbar"
    >
      <div className="todo_container max-w-[456px] w-full relative flex-col flex gap-4 px-4 md:px-0 my-[124px]">
        <MyContexts>
          <SistemMessage/>
          <AddTask/>
          <TasksTable/>
        </MyContexts>
      </div>
    </div>
  )
}

export default App
