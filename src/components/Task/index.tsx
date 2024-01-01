// import React from 'react'

import { useContext, useState } from "react"
import { useTaskContext } from "../../context/TaskContext"
import { SistemMessageContext } from "../../context/SistemMessageContext"
import { Task as TypeTask } from "../../types"

type TaskProps = {
  task: TypeTask,
  id: number
}

const Task = ({task, id}: TaskProps) => {

  const {dispatch} = useTaskContext()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [newTask, setNewtask] = useState<TypeTask>(task)
  const [isCheck, setIsCheck] = useState<boolean>(task.status)
  const smContextValue = useContext(SistemMessageContext)

  const handleChangeStatus = () =>{
    const updatedTask: TypeTask = {content: task.content, status: !isCheck}
    dispatch({type: "EDIT_TASK", payload: {oldTask: task, newTask: updatedTask} })
    setIsCheck(!isCheck)

  }


  const handleDeleteTask = () => {
    dispatch({type: "DELETE_TASK", payload: id})
  }

  const handleSaveTask = () =>{

    if(newTask.content.trim() === ""){
      smContextValue?.setSm({
        type: "ERROR",
        msg: "Você não pode salvar uma tarefa vazia."
      })
      return
    }

    dispatch({type: "EDIT_TASK", payload: {oldTask: task, newTask: newTask}})
    smContextValue?.setSm({type: "",msg: ""})
    setIsEdit(false)
  }

  return (
    <div
      className="px-4 bg-gray-500 hover:bg-gray-400 rounded-lg transition-colors flex flex-row justify-between items-center cursor-pointer"
    >

      <label className="h-14 w-full items-center flex gap-4 cursor-pointer">
        <input 
          type="checkbox"
          defaultChecked={isCheck}
          className=" accent-purple w-4 h-4 outline-none rounded-2xl relative inline-block"
          onChange={handleChangeStatus}
        />
        {
          !isEdit ? (
            !isCheck ? (
              <p 
                className="text-md md:text-xl font-lato text-gray-100 font-medium"
            > 
              {task.content}
            </p>
            ) : (
              <p 
                className="text-md md:text-xl font-lato font-medium text-gray-300 line-through"
            > 
              {task.content}
            </p>
            )
          ) : (
              <input 
                type="text"
                className="bg-transparent w-full text-md md:text-xl outline-none text-gray-100 border-b-[1px] font-lato"
                onChange={(e) => setNewtask({content: e.target.value, status: isCheck})}
                autoFocus
                value={newTask.content}
              />
          )
        }
      </label>

      <div className="action_buttons flex">

        {
          isEdit ? (
            <button 
              className="text-sm md:text-lg uppercase text-gray-100 rounded-md w-12 h-9 flex items-center justify-center ml-2 hover:bg-gray-300 transition-colors"
              onClick={handleSaveTask}
            >
              Save
            </button>
          ) : (
            <>
              <button className="p-1.5 group hover:bg-gray-300 rounded-md transition-colors" onClick={()=>setIsEdit(true)}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path className=" group-hover:fill-purple transition-colors" d="M16.9898 15.9533C17.5469 15.9533 18 16.4123 18 16.9766C18 17.5421 17.5469 18 16.9898 18H11.2797C10.7226 18 10.2695 17.5421 10.2695 16.9766C10.2695 16.4123 10.7226 15.9533 11.2797 15.9533H16.9898ZM13.0299 0.699064L14.5049 1.87078C15.1097 2.34377 15.513 2.96726 15.6509 3.62299C15.8101 4.3443 15.6403 5.0527 15.1628 5.66544L6.3764 17.0279C5.97316 17.5439 5.37891 17.8341 4.74222 17.8449L1.24039 17.8879C1.04939 17.8879 0.890213 17.7589 0.847767 17.5761L0.0518984 14.1255C-0.086052 13.4912 0.0518984 12.8355 0.455138 12.3303L6.68413 4.26797C6.79025 4.13898 6.98126 4.11855 7.1086 4.21422L9.72966 6.29967C9.89944 6.43942 10.1329 6.51467 10.377 6.48242C10.8969 6.41792 11.2471 5.94493 11.1941 5.43969C11.1622 5.1817 11.0349 4.96671 10.8651 4.80546C10.812 4.76246 8.31832 2.76301 8.31832 2.76301C8.15914 2.63401 8.12731 2.39752 8.25465 2.23735L9.24152 0.957057C10.1541 -0.214663 11.7459 -0.322161 13.0299 0.699064Z" fill="#3B4053"/>
                </svg>
              </button>
              <button className="p-1.5 ml-1 group hover:bg-gray-300 rounded-md transition-colors" onClick={handleDeleteTask}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path className="group-hover:fill-red transition-colors" d="M15.9391 6.69713C16.1384 6.69713 16.3193 6.78413 16.4623 6.93113C16.5955 7.08813 16.6626 7.28313 16.6432 7.48913C16.6432 7.55712 16.1102 14.2971 15.8058 17.134C15.6152 18.875 14.4929 19.932 12.8094 19.961C11.5149 19.99 10.2496 20 9.00379 20C7.68112 20 6.38763 19.99 5.13206 19.961C3.50498 19.922 2.38168 18.846 2.20079 17.134C1.88763 14.2871 1.36439 7.55712 1.35467 7.48913C1.34494 7.28313 1.41108 7.08813 1.54529 6.93113C1.67756 6.78413 1.86818 6.69713 2.06852 6.69713H15.9391ZM11.0647 0C11.9488 0 12.7385 0.616994 12.967 1.49699L13.1304 2.22698C13.2627 2.82197 13.7781 3.24297 14.3714 3.24297H17.2871C17.6761 3.24297 18 3.56596 18 3.97696V4.35696C18 4.75795 17.6761 5.09095 17.2871 5.09095H0.713853C0.32386 5.09095 0 4.75795 0 4.35696V3.97696C0 3.56596 0.32386 3.24297 0.713853 3.24297H3.62957C4.22185 3.24297 4.7373 2.82197 4.87054 2.22798L5.02323 1.54598C5.26054 0.616994 6.0415 0 6.93527 0H11.0647Z" fill="#3B4053"/>
                </svg>
              </button>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Task