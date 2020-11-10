import "./App.css";
import TodoItem from "./components/TodoItem";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {title: 'Go to school.', isComplete: true},
        {title: 'Buy a book.', isComplete: false},
        {title: 'Go home at 7:00PM.', isComplete: false}
      ]
    }
  }

  // onItemClicked(item) {
  //   return (event) => {
  //     console.log(item);
  //   };
  // }

  onItemClicked() {
    console.log('item clicked');
  }

  render() {
    const { todoItems } = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          {
            todoItems.length && todoItems.map((item, index) => ( 
              <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemClicked} />
              )
            )
          }
          {
            todoItems.length === 0 && 'Nothing here'
          }
        </div>
      )
    }
  }
}

export default App;
