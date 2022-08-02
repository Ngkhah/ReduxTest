import { Button } from "antd";
import React from "react";
import "antd/dist/antd.css";
import TodoForm from "./TodoForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTodos, markCompleted } from "../store/actions/TodoAction";

const Todos = ({ todos, markCompleted, deleteTodos }) => {
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed qcont" : "qcont"}
            onClick={deleteTodos.bind(this, todo.id)}
          >
            <input
              type="checkbox"
              className="checkBox"
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
};
const mapStateToProps = (state) => ({
  //todos nay ko liên quan toi todos trong reducer
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, { markCompleted, deleteTodos })(Todos);
