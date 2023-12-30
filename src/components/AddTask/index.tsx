import React, { useContext, useRef, useState } from 'react'
import { useTaskContext } from '../../context/TaskContext'
import { SistemMessageContext } from '../../context/SistemMessageContext'

const AddTask = () => {

  const [task, setTask] = useState<string>("")
  const {dispatch} = useTaskContext()
  const smContextValue = useContext(SistemMessageContext)
  const inputTask = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if(task.trim() === ""){
      smContextValue?.setSm({
        type: "ERROR",
        msg: "Você não pode adicionar uma tarefa vazia."
      })
      return
    }

    // Add task in tasks array...
    dispatch({type: "ADD_TASK", payload: task})
    smContextValue?.setSm({type: "",msg: ""})

    if (inputTask.current) {
      inputTask.current.focus();
    }
    setTask("")
    
  }

  const handleShowProgressGraphic = () =>{
    console.log("open progress graphic...")
  }

  return (
    <div className="add_task bg-gray-600 text-gray-100 p-4 md:p-6 rounded-2xl">
      <div className="wrapper flex flex-row gap-4 items-center justify-start mb-5">
        <h2 className=" font-bold text-xl md:text-2xl font-lato ">Digite sua tarefa</h2>
        <button
          onClick={handleShowProgressGraphic}
          className=' bg-gray-500 p-1.5 rounded-md hover:bg-gray-400 transition-colors'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H2C2.55228 0 3 0.447715 3 1V10C3 10.5523 2.55228 11 2 11H1C0.447715 11 0 10.5523 0 10V1ZM5 3C5 2.44772 5.44772 2 6 2H7C7.55229 2 8 2.44772 8 3V10C8 10.5523 7.55228 11 7 11H6C5.44771 11 5 10.5523 5 10V3ZM11 5C10.4477 5 10 5.44772 10 6V10C10 10.5523 10.4477 11 11 11H12C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5H11Z" fill="#3B4053"/>
          </svg>
        </button>
      </div>
    
    <form onSubmit={e => handleSubmit(e)} className=" gap-4 flex">

      <input
        ref={inputTask}
        onChange={(e)=> setTask(e.target.value)} 
        value={task}
        type="text"
        placeholder="Sair com os pets..."
        className=" max-w-[344px] w-full p-2 text-lg md:text-xl bg-transparent border-b-4 border-gray-400 placeholder:text-gray-300 outline-none focus:border-purple transition-colors"
      />
      <button 
        className="min-w-12 min-h-12 rounded-lg flex items-center justify-center bg-purple hover:brightness-[1.1] transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path d="M19.4735 10.1544C19.4828 9.4377 19.0946 8.77898 18.4641 8.43324L3.77226 0.361095C3.11421 -0.0108174 2.33848 0.0348746 1.7184 0.458296C1.08695 0.888848 0.763747 1.91379 0.940267 2.65406L2.31182 8.40033C2.45262 8.98956 2.97998 9.40445 3.58668 9.40186L11.7627 9.3765C12.1814 9.3681 12.5209 9.70765 12.5125 10.1263C12.5112 10.5379 12.1767 10.8724 11.758 10.8808L3.57423 10.8998C2.96753 10.901 2.43759 11.3178 2.29313 11.9079L0.873079 17.677C0.700663 18.3588 0.897237 19.0394 1.37827 19.5204C1.43486 19.577 1.49852 19.6406 1.56223 19.6901C2.18518 20.1707 3.00102 20.232 3.69757 19.8609L18.4393 11.8677C19.0719 11.5323 19.4642 10.8711 19.4735 10.1544Z" fill="#CED5F0"/>
        </svg>
      </button>
    </form>
  </div>
  )
}

export default AddTask