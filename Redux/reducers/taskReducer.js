import {
  TOGGLE_TASK,
  DELETE_ALL_TASKS,
  ADD_TASK,
} from "../actions/taskActions";

const initialState = [
  { id: 1, text: "User Research & Analysis", completed: true },
  { id: 2, text: "Black & White Wireframe", completed: true },
  { id: 3, text: "Design On Figma", completed: false },
];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case DELETE_ALL_TASKS:
      return [];

    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return [...state, newTask];

    default:
      return state;
  }
};

export default taskReducer;
