import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class TodoList extends Component {
  state = {
    todos: [
      { key: 1, id: 1, task: "Karóra, lehetőleg vízálló", completed: false },
      { key: 2, id: 2, task: "Baseball sapka", completed: false },
      { key: 3, id: 3, task: "Övtáska", completed: false },
      { key: 4, id: 4, task: "Kullancs / szúnyogriasztó", completed: false },
      { key: 5, id: 5, task: "Zárt cipő", completed: false },
      { key: 6, id: 6, task: "Hosszúnadrág", completed: false },
      {
        key: 7,
        id: 7,
        task: "Kényelmes, játszós ruha",
        completed: false
      },
      {
        key: 8,
        id: 8,
        task: "Fürdőruha, mert bemegyünk a tóba",
        completed: false
      },
      { key: 9, id: 9, task: "Törcsi", completed: false },
      {
        key: 10,
        id: 10,
        task: "Fogkefe / fogkrém / tusfürdő / stb...",
        completed: false
      },
      { key: 11, id: 11, task: "Papucs, tusoláshoz", completed: false },
      { key: 12, id: 12, task: "Nasi :-)", completed: false }
    ]
  };

  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <CSSTransition key={todo.id} timeout={500} classNames="todo">
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
          />
        </CSSTransition>
      );
    });
    return (
      <div className="TodoList">
        <h1>
          Go To Bátor Tábor! <span>An Animated Todo List For Cimboras.</span>
        </h1>
        <NewTodoForm createTodo={this.create} />

        <ul>
          <TransitionGroup className="todo-list">{todos}</TransitionGroup>
        </ul>
      </div>
    );
  }
}
