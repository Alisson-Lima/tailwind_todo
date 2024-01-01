import AddTask from './components/AddTask'
import ProgressGraphic from './components/ProgressGraphic'
import SistemMessage from './components/SistemMessage'
import TasksTable from "./components/TasksTable"
import MyContexts from './context/MyContexts'

function App(): React.ReactNode {

  return (
    <div 
      className="w-screen h-screen flex items-center border-2 border-red justify-start flex-col bg-gray-100 overflow-y-scroll scrollbar"
    >
        <MyContexts>
          <SistemMessage/>
          <div className="todo_container max-w-[456px] w-full relative flex-col flex gap-4 px-4 my-16 md:mt-36 md:px-0 border-2 border-red">
              <ProgressGraphic/>
              <AddTask/>
              <TasksTable/>
          </div>
        </MyContexts>
    </div>
  )
}

export default App
