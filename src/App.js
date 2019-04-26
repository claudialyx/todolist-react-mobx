import React from "react";
import "./App.css";
import Todolist from "./Todolist";
import TodoCompleted from "./TodoCompleted";
import Store from "./Store";
import { observer, inject } from "mobx-react";
import { Input, Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
@inject("Store")
@observer
class App extends React.Component {
  render() {
    // console.log('access to store:', Store.input)
    const panes = [
      {
        menuItem: "All",
        render: () => (
          <Tab.Pane attached={false}>
            <Todolist />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Completed",
        render: () => (
          <Tab.Pane attached={false}>
            <TodoCompleted />
          </Tab.Pane>
        )
      }
    ];
    return (
      <div className="App">
              { Store.message ? <div className="message">Well done! You finished a task!!</div> : null }
        <div className="App-body">
          <h1>Simple To Do List with React & MobX</h1>
          <div className="container">
            <div id="todo-box">
              <p>To do list:</p>
              <Input
                size="small"
                type="text"
                value={Store.input}
                onChange={Store.handleChange}
                onKeyPress={Store.enterKeySubmit}
                />
            </div>
          </div>
        </div>
        <div className="tab-container">
          <Tab
            className="menu"
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            />
        </div>
      </div>
    );
  }
}

export default App;
