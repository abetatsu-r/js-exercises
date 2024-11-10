import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [], // todoのリスト
      name: "", // textboxの値
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addTodo = () => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, { name, completed: false }],
      name: "",
    });
  };

  toggleTodo = (index) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todos[index], completed: !todos[index].completed },
        ...todos.slice(index + 1),
      ],
    });
  };

  removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)],
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <input type="text" onChange={this.onInput} value={this.state.name} />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => {
                  this.toggleTodo(index);
                }}
              />
              <label
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.name}
              </label>
              <button
                onClick={() => {
                  this.removeTodo(index);
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
