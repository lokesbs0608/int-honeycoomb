export const UPDATE_TASK = "UPDATE_TASK";

import {Task} from '../../../types'


export interface AddTaskAction{
    type:typeof UPDATE_TASK;
    payload:Task
}

export type TaskActionType = AddTaskAction ;