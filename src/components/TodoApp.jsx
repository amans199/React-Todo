import React from 'react';
// import { connect } from 'react-redux'
import guid from 'guid'
const todos = [{
    id: guid.raw(),
    text: "num1",
    done: false
},
{
    id: guid.raw(),
    text: "num2",
    done: true
},
{
    id: guid.raw(),
    text: "num3",
    done: false
}
];
const TodoList = ({ _todos = todos }) => (
    <ul className="px-0">
        {todos.map(todo => (
            <li key={todo.id} className="p-2 my-2">{todo.text}</li>
        ))}
    </ul>
)

export default TodoList;