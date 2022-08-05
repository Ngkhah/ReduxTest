import { ADD_TODOS, DELETE_TODOS, GET_TODOS, MARK_COMPLETED } from "../types";

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case MARK_COMPLETED:
      //ko đươc cho State == gì đó vì nó sẽ biến thành mặc định
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) todo.completed = !todo.completed;
          return todo;
        }),
      };

    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
export default TodoReducer;
