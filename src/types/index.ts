export type Task = {
    content: string,
    status: boolean
}

// Sistem Message Type
export type Sm = {
    type: string,
    msg: string
}

export type TaskContextReducerAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: Task }
  | { type: 'EDIT_TASK'; payload: { oldTask: Task; newTask: Task } };