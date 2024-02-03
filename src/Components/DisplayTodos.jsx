// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions/todo';

const DisplayTodos = ({ todos, deleteTodo }) => {

  // const [todos, setTodos] = useState([
  //   {
  //     title: 'first title',
  //     description: 'First description'
  //   },
  //   {
  //     title: 'second title',
  //     description: 'second description'
  //   },
  //   {
  //     title: 'third title',
  //     description: 'third description'
  //   },
  // ]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className='mt-3 shadow-sm'>
              <Card.Body>
                <h3>All todos</h3>
                <DisplayCount />
                <ListGroup>

                  {
                    todos.map((todo, index) => (
                      <ListGroup.Item key={index}>
                        <h4>
                          {todo.title}
                        </h4>
                        <p>{todo.description}</p>
                        <Button size="sm" variant="danger" onClick={e => deleteTodo(todo.id)}>Delete</Button>
                      </ListGroup.Item>
                    ))
                  }
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => (dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)