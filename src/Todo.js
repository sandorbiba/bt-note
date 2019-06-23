import React, { Component } from "react";

export default class Todo extends Component {
  handleTodo = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.handleTodo}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}
