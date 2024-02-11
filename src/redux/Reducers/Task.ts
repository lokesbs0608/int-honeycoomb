const TaskReducer = (
  state = { task: [{ id: "" }] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        task: state.task.map((task) => {
          task?.id === action.payload.taskId ? action.payload.UpdateTask : task;
        }),
      };
    default:
      return state;
  }
};

export default TaskReducer;
