export const ADD_TASK = "ADD_TASK";

import { Task } from "../../../types";

export const ADD_TASK_ACTION = (data: Task) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};
