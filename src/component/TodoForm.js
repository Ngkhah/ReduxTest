import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodos } from "../store/actions/TodoAction";

const TodoForm = ({addTodos}) => {
  const [title, setTitle] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (title !== '') {
      const newTodos = {
        id: uuidv4(),
        title,
        completed: false
      }
      addTodos(newTodos)
      setTitle('');
    }

  };

  return (
    <div>
      <form onSubmit={onHandleSubmit} >
        <input type="text" onChange={onTitleChange} name='title' value={title} required />
        <input type="submit" value="ADD" />
      </form></div>
  )
}

TodoForm.propTypes = {
  addTodos: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  //todos nay ko liên quan toi todos trong reducer
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, { addTodos })(TodoForm)