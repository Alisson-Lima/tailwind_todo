// import React from 'react'
import Task from "../Task"
import { useTaskContext } from "../../context/TaskContext"

const TasksTable = () => {

    // The app starts with 3 tasks
    const {tasks} = useTaskContext()

  return (
    <div
     className=" p-6 bg-gray-600 rounded-2xl flex flex-col gap-2"
    >
    {
        tasks.length > 0 ? (
          tasks.map((item, i) => (
            <Task key={i} task={item}/>
        )).reverse()
        ) : (
          <h2 className="text-2xl text-gray-100 text-center">Nenhuma tarefa pendente. :P</h2>
        )
    }
    </div>
  )
}

export default TasksTable