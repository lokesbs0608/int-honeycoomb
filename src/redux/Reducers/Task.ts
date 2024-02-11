


const TaskReducer = (state = { task: [] }, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          task: [...state.task, action.payload]
        };
      default:
        return state;
    }
  };

  export default TaskReducer