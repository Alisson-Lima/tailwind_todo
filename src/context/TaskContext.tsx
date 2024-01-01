import React, { createContext, useContext, ReactNode, useReducer, Dispatch } from 'react';

import { Task } from '../types';
import { TaskContextReducerAction } from '../types';

type TaskContextProps = {
  tasks: Task[];
  dispatch: Dispatch<TaskContextReducerAction>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const reducer = (state: Task[], action: TaskContextReducerAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((_, id: number) => action.payload !== id);
    case 'EDIT_TASK':
      return state.map((task: Task) =>
        task === action.payload.oldTask ? action.payload.newTask : task
      );
    default:
      return state;
  }
};

type TaskContextProviderProps = {
  children: ReactNode;
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {

  const initialTasks: Task[] = [
    {
      content: "Fazer academia",
      status: false
    },
    {
      content: "Lavar a louça",
      status: false
    },
    {
      content: "Estudar Tailwind",
      status: true
    },
  ];

  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const taskContextValue: TaskContextProps = {
    tasks,
    dispatch,
  };

  return <TaskContext.Provider value={taskContextValue}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }
  return context;
};
