import "./App.css";
import TodoItem from "./components/TodoItem";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: 'Go to school.', isComplete: true},
      {title: 'Buy a book.', isComplete: false},
      {title: 'Go home at 7:00PM.', isComplete: false}
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => ( 
            <TodoItem key={index} item={item} />
            )
          )
        }
        {
          this.todoItems.length === 0 && 'Nothing here'
        }
      </div>
    );
  }
}

export default App;
