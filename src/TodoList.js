import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  state = { todos: [{ task: "Sapka" }, { task: "Fehér póló" }] };

  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Bátor Tábor Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
