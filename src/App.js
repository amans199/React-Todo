import React, { Component } from 'react'
import TodoApp from './components/TodoApp'
import './App.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import guid from 'guid'

// import todos from './components/todos'
// import { Provider } from 'react-redux'
// const helmet = Helmet.renderStatic();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      todos: []
    }
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // create item with unique id 
    const newItem = {
      id: guid.raw(),
      text: this.state.newItem.slice(),
      done: false
    };

    // copy of current list of items 
    const todos = [...this.state.todos]

    // add new item to list 
    todos.push(newItem)

    // update state with new todos and reset newItem input 
    this.setState({
      todos,
      newItem: ""
    })

  }

  myCallback = (dataFromChild) => {
    // [...we will use the dataFromChild here...]
    const stateTodos = this.state.todos;
    // this.setState({
    // todos: this.state.todos.map(el => (el.id === dataFromChild ? { ...el.done = false } : el))
    // todos: this.state.todos.map(function (el) {
    //   // if (el.id === dataFromChild) {
    //   //   Object.assign(el, { done: false })
    //   // } else {
    //   //   return el;
    //   // }
    //   console.log(el)
    // })

    // });
    // function doneItem(id) {
    //   return stateTodos.filter(item => {
    //     return item.id === id
    //   })
    // };
    var itemIndex = stateTodos.findIndex(function (c) {
      return c.id === dataFromChild;
    });
    console.log(stateTodos[itemIndex]);
    // this.setState({
    //   todos[itemIndex]: {
    //     id: todos[itemIndex].id,
    //     text: todos[itemIndex].text,
    //     done: todos[itemIndex].done === true ? todos[itemIndex] = false : todos[itemIndex] = true
    //   }
    // })
    // this.setState(prevState => {
    //   let todos = Object.assign({}, prevState.stateTodos[itemIndex].done);  // creating copy of state variable jasper
    //   todos[itemIndex].done === true ? todos[itemIndex].done = false : todos[itemIndex].done = true;                     // update the name property, assign a new value                 
    //   return { todos };                                 // return new object jasper object
    // })
    if (stateTodos[itemIndex].done === true) {
      this.setState(prevState => ({
        todos: prevState.todos.map(
          el => el.id === dataFromChild ? { ...el, done: false } : el
        )
      }))
    } else {
      this.setState(prevState => ({
        todos: prevState.todos.map(
          el => el.id === dataFromChild ? { ...el, done: true } : el
        )
      }))
    }
    // doneItem(dataFromChild).done === true ? doneItem(dataFromChild).done = false : doneItem(dataFromChild).done = true;
    // function doneItem(dataFromChild) {

    //   // var updatedItem = update(stateTodos[itemIndex]);
    //   // let updatedObj = Object.assign({}, stateTodos[itemIndex], { [stateTodos[itemIndex].done]: true });
    //   return stateTodos[itemIndex].done;

    //   // var newData = update(stateTodos, {
    //   //   $splice: [[itemIndex, 1, updatedComment]]
    //   // });
    //   // this.setState({ stateTodos: newData });



    //   // this.setState({
    //   //   todos
    //   // })
    // }
    // console.log("doneItem(dataFromChild) : " + doneItem(dataFromChild))

  }

  numberOfDoneItems() {
    let allDone = document.querySelectorAll(`.true`)
    return allDone.length;
  }

  showAllDone() {
    // const filteredShow = this.state.todos.reduce((a, o) => (o.done && a.push({ id: o.id, text: o.text, done: true }), a), [])
    let allDone = document.querySelectorAll(`.true`)
    allDone.forEach(element => {
      element.style.display = "flex"
    });
    let AllDoneIsShown = true
    let AllDoneIsHidden = false

    // filteredShow.forEach(element => {
    //   document.querySelector(`.true`).style.display = "flex"

    // });
    return AllDoneIsShown, AllDoneIsHidden;
    // console.log(filteredShow.length)
  }

  hideAllDone() {
    // const filteredHide = this.state.todos.reduce((a, o) => (o.done === false && a.push({ id: o.id, text: o.text, done: true }), a), [])
    let allDone = document.querySelectorAll(`.true`)
    allDone.forEach(element => {
      element.style.display = "none"
    });
    let AllDoneIsHidden = true
    let AllDoneIsShown = false

    // filteredHide.forEach(element => {
    //  .style.display = "none"
    // });

    return AllDoneIsHidden, AllDoneIsShown;
    // console.log(filteredHide.length)
  }
  render() {
    return (
      <div className="App" >
        {/* <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}
        < div className="container" >
          <header className="App-header my-5">
            <h1>
              React-Todo App Created with <span role="img" aria-label="Love">&#x1F5A4;</span> by
            <a
                href="https://www.linkedin.com/in/amans199/"
                target="_blank"
                rel="noopener noreferrer"
              > Ahmed Mansour</a>
            </h1>
          </header>
          <Card className="text-center my-5">
            <Card.Header>{this.state.todos.length > 0 ? `You Have ${this.state.todos.length} Todo` : 'There nothing to do, Sir'}</Card.Header>
            <Card.Body>
              {/* <Provider listItems={todos()}> */}
              {/* todo : make the button only appear if the done items more than 0 */}
              {/* {this.numberOfDoneItems() > 0 && this.showAllDone() === false && this.hideAllDone() === false
                ? <a href="#" onClick={() => { this.showAllDone() }}>{this.state.todos.length > 0 ? 'Show All Done Items' : ''}</a>
                : ''
              }
              {this.numberOfDoneItems() > 0 && this.hideAllDone() === false && this.showAllDone() === true
                ? <a href="#" onClick={() => { this.hideAllDone() }}>{this.state.todos.length > 0 ? 'Hide All Done Items' : ''}</a>
                : ''
              } */}

              <div className="d-flex align-items-center justify-content-between">
                <a href="#" onClick={() => { this.showAllDone() }}>{this.state.todos.length > 0 ? 'Show All Done Items' : ''}</a>
                <a href="#" onClick={() => { this.hideAllDone() }}>{this.state.todos.length > 0 ? 'Hide All Done Items' : ''}</a>
              </div>
              {/* <a href="#" onClick={() => { this.showAllDone() }}>{this.state.todos.length > 0 ? 'Show All Done Items' : ''}</a>
              <a href="#" onClick={() => { this.hideAllDone() }}>{this.state.todos.length > 0 ? 'Hide All Done Items' : ''}</a> */}

              <TodoApp listItems={this.state.todos} callbackFromChild={this.myCallback} />
              <span>{this.state.todos.length === 0 ? 'your Todo list will appear here' : ''}</span>
              {/* </Provider> */}
            </Card.Body>
            <Card.Footer className="text-muted">
              <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="inputForTodo" >
                  <Form.Label>Add new todo</Form.Label>
                  <Form.Control placeholder="Don't forget todo ..."
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add
            </Button>
              </Form>
            </Card.Footer>
          </Card>
        </div>

      </div >
    );
  }
}

export default App;
