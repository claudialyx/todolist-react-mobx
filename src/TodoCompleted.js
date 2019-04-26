import React from "react";
import { inject, observer } from "mobx-react";



@inject("Store")
@observer
class TodoCompleted extends React.Component {
  render() {
    const filter = this.props.Store.filterCompleted.length? this.props.Store.filterCompleted.map((todo, index)=>{return (
        <div
          className="todo-item"
          key={index}
          name={todo.id}
          style={{ margin: "1em" }}
        >
            {todo.input}
        </div>
      );
    })
  : null;
    return <div>{filter}</div>;
  }
}

export default TodoCompleted;
