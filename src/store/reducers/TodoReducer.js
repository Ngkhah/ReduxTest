import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "Viec 1",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Viec 2",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Viec 3",
      completed: false,
    },
  ],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MARK_COMPLETED":
      //ko đươc cho State == gì đó vì nó sẽ biến thành mặc định
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) todo.completed = !todo.completed;
          return todo;
        }),
      };

    case "ADD_TODOS":
      return {
        ...state, todos: [...state.todos,
            action.payload]
      };

      case "DELETE_TODOS":
        return {...state,
           todos: state.todos.filter(todo => todo.id !== action.payload)}
      
    default:
      return state;
  }
};
export default TodoReducer;
