// import React from 'react'
import { useContext } from "react"
import Task from "../Task"
import TaskContext from "../../context/TaskContext"

const TasksTable = () => {

    // The app starts with 3 tasks
    const [...initialValues] = useContext(TaskContext)

  return (
    <div
     className=" p-6 bg-gray-600 rounded-2xl flex flex-col gap-2"
    >
    {
        initialValues.map((item, i) => (
            <Task key={i} id={i} task={item}/>
        ))
    }
    </div>
  )
}

export default TasksTable