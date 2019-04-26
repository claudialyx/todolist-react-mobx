import React from "react";
import { inject, observer } from "mobx-react";

@inject("Store")
@observer
class Todolist extends React.Component {
  render() {
    const Store = this.props.Store;
    // console.log("here:", Store.input);
    const todolist = Store.todos.length
      ? Store.todos.map((todo, index) => {
          return (
            <div
              className="todo-item"
              key={index}
              name={todo.id}
              style={{ margin: "1em" }}
            >
              <input
                type="checkbox"
                className="todo-checkbox"
                name={todo.id}
                onChange={Store.handleCheckbox}
                checked={todo.completed}
              />
              <span
                className="todo-text"
                style={
                  todo.completed ? { textDecoration: "line-through" } : null
                }
              >
                {todo.input}
              </span>
              <button
                className="todo-button"
                name={index}
                onClick={Store.deleteTodo}
              >
                delete
              </button>
            </div>
          );
        })
      : null;
    return <div className="todo-box">{todolist}</div>;
  }
}

export default Todolist;
