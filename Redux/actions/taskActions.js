export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_ALL_TASKS = "DELETE_ALL_TASKS";
export const ADD_TASK = "ADD_TASK";

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const deleteAllTasks = () => ({
  type: DELETE_ALL_TASKS,
});

export const addTask = (newItem) => ({
  type: ADD_TASK,
  payload: newItem,
});
