import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'


class TodoList extends Component {
    markTodoAsDone(e) {
        //pass data to parent
        this.props.callbackFromChild(e);
    }
    render() {
        return (
            <ul className="px-0 my-0">
                {this.props.listItems.map(todo => (
                    <li key={todo.id} className={"p-2 my-2 justify-content-between align-items-center " + todo.done + (todo.done === true ? ' todo-done ' : '  ')}
                        onClick={() => { this.markTodoAsDone(todo.id) }}>{todo.text}
                        <Form.Check type="checkbox" className="d-flex align-items-center"
                            checked={todo.done === true ? false : true} readOnly /></li>
                ))
                }
            </ul>
        );
    }
}

// const todos = [{
//     id: guid.raw(),
//     text: "num1",
//     done: false
// },
// {
//     id: guid.raw(),
//     text: "num2",
//     done: true
// },
// {
//     id: guid.raw(),
//     text: "num3",
//     done: false
// }
// ];
// const TodoList = ({ _todos = todos }) => (
//     <ul className="px-0">
//         {todos.map(todo => (
//             <li key={todo.id} className="p-2 my-2 d-flex justify-content-between align-items-center">{todo.text}
//                 <Form.Check type="checkbox" className="d-flex align-items-center" /></li>

//         ))}
//     </ul>
// )

export default TodoList;