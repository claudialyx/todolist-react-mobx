import { observable, action, computed, autorun, when } from "mobx";

let id = 0;
// tells MobX that we are observing
class AppStore {
  @observable input = "";
  @observable todos = [];
  @observable message = false;

  @action addTodo = () => {
    // in MobX we can directly mutate the state
    if (this.input) {
      this.todos.push({ input: this.input, id: id++, completed: false });
      this.input = "";
    }
  };

  @action deleteTodo = e => {
    const index = parseInt(e.target.name);
    this.todos.splice(index, 1);
  };

  @action handleChange = e => {
    this.input = e.target.value;
  };

  @action enterKeySubmit = e => {
    if (e.which === 13 && !e.shiftKey) {
      this.addTodo();
    }
  };

  @action handleCheckbox = e => {
    const id = parseInt(e.target.name);
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        this.todos[i].completed = !this.todos[i].completed;
        this.message= true
        setTimeout(this.hideMessage,3000)
      }
    }
  };

  @action hideMessage=()=>{
      this.message=false
  }
  
  //computed is used like a function
  @computed get filterCompleted() {
    const a = this.todos.filter(todo => todo.completed === true);
    console.log(a);
    return a;
  }
}

// autorun(() => {
//     Store.input?
//     console.log("autorun input:", Store.input):
//     console.log('hi')
// });

const Store = new AppStore();
export default Store;
