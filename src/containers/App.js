import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoApp from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                  id: 22,
                  number: 1,
                  text: "Ola"
                },
                {
                  id: 23,
                  number: 2,
                  text: "Zosia"
                },
                {
                  id: 24,
                  number: 3,
                  text: "Kasia"
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="Title in webpack" taskNumber={this.state.data.length}></Title>
                <TodoApp name="This is list of id" list={this.state.data}></TodoApp>
            </div>
        );
    }
}

export default App;