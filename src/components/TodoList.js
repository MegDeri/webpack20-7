import React from 'react';
import style from './TodoList.css';

const TodoApp = props => {
    
    const listElement = props.list.map(elem => <li id={elem.id} onCkick={() => props.remove(elem.id) }>{elem.text}</li>)
    return (
        <ul className={style.todoApp}>
            <h4>{props.name}</h4>
            {listElement}
        </ul> 
    )
}

export default TodoApp;