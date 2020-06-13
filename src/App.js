import React from 'react'
import TodoApp from './components/TodoApp'
import './App.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
// import todos from './components/todos'
// import { Provider } from 'react-redux'
// const helmet = Helmet.renderStatic();

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}
      <div className="container">
        <header className="App-header my-5">
          <h1>
            Vue-Todo App Created with <span role="img" aria-label="Love">&#x1F5A4;</span> by
            <a
              href="https://www.linkedin.com/in/amans199/"
              target="_blank"
              rel="noopener noreferrer"
            > Ahmed Mansour</a>
          </h1>
        </header>
        <Card className="text-center my-5">
          <Card.Header>You Have 2 Todo</Card.Header>
          <Card.Body>
            {/* <Provider listItems={todos()}> */}
            <TodoApp />
            {/* </Provider> */}
          </Card.Body>
          <Card.Footer className="text-muted">
            <Form>
              <Form.Group controlId="inputForTodo" >
                <Form.Label>Add new todo</Form.Label>
                <Form.Control placeholder="Don't forget todo ..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
          </Card.Footer>
        </Card>
      </div>

    </div>
  );
}

export default App;
