const TaskReducer = (
  state = { task: [] },
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case "UPDATE_TASK":
      const tempData = state.task.map((item: any) =>
        item?.id === action.payload.taskId ? action.payload.UpdateTask : item
      );
      return {
        ...state,
        task: tempData,
      };
    default:
      return state;
  }
};

export default TaskReducer;
