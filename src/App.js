import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//data
import { todos } from './todos.json';

//subcomponent
import TodoForm from './components/TodoForms';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleTodo = this.handleTodo.bind(this);
  }

  //Agrega tareas 
  handleTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  // Remover Tareas
  removeTodo(index) {
    if (window.confirm('estas seguro de querer eliminar la tarea?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }

  }
  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className='col-md-4' key={i}>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3> {todo.title}</h3>
              <span className='badge badge-pill badge-danger ml-2'>
                {todo.priority}
              </span>
            </div>
            <div className='card-body'>
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className='card-footer'>
              <button className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delet
              </button>
            </div>

          </div>
        </div>
      );
    })

    return (
      <div className="App" >
        <nav className='navbar navbar-dark bg-dark'>
          <a href="" className='text-white'>

            Task

            <span className='badge badge-pill badge-light ml-2'>
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className='container'>

          <div className='row mt-4'>

            <div className='col-md-4 text-center'>
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleTodo}></TodoForm>
            </div>

            <div className=' col-md-8'>

              <div className='row'>

                {todos}

              </div>

            </div>


          </div>

        </div>



      </div>
    );
  }
}

export default App;
