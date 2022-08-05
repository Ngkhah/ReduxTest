import { Button } from "antd";
import React, { useEffect } from "react";
import "antd/dist/antd.css";
import TodoForm from "./TodoForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos, deleteTodos, markCompleted } from "../store/actions/TodoAction";

const Todos = ({ getTodos, todos, markCompleted, deleteTodos }) => {
  useEffect(()=>{
    getTodos()
  },[])
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed qcont" : "qcont"}
          >
            <input
              type="checkbox"
              className="checkBox"
              checked={todo.completed}
              onChange={markCompleted.bind(this, todo.id)}
            />
            {todo.title}{" "}
            <Button
              type="primary"
              danger
              onClick={deleteTodos.bind(this, todo.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteTodos: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  //todos nay ko liên quan toi todos trong reducer
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, {getTodos, markCompleted, deleteTodos })(Todos);
