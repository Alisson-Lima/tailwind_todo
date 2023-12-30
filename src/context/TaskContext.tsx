import React, { createContext, useContext, ReactNode, useReducer, Dispatch } from 'react';

type ReducerAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'EDIT_TASK'; payload: { oldTask: string; newTask: string } };


interface TaskContextProps {
  tasks: string[];
  dispatch: Dispatch<ReducerAction>;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskContextProviderProps {
  children: ReactNode;
}

const reducer = (state: string[], action: ReducerAction): string[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task: string) => action.payload !== task);
    case 'EDIT_TASK':
      return state.map((task: string) =>
        task === action.payload.oldTask ? action.payload.newTask : task
      );
    default:
      return state;
  }
};


export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({ children }) => {
  const initialTasks = ['Fazer academia', 'Lavar a louça', 'Estudar Tailwind'];
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const contextValue: TaskContextProps = {
    tasks,
    dispatch,
  };

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }
  return context;
};
