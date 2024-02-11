export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

import { Task } from "../../../types";

export const ADD_TASK_ACTION = (data: Task) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};
export const UPDATE_TASK_ACTION = (taskId:string,UpdateTask:Task) => {
  return {
    type: UPDATE_TASK,
    payload: {taskId,UpdateTask},
  };
};

