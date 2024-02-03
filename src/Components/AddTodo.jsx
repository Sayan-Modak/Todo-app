// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import { addTodo } from './../redux/actions/todo';
import { v4 } from 'uuid';

const Addtodo = ({ addTodo }) => {

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    id: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // add todo and store

    addTodo({ ...todo, id: v4() });
    // console.log(todo);
    setTodo({
      title: '',
      description: ''
    })
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className='shadow-sm'>
            <Card.Body>
              <h3>Add Todo here</h3>
              <DisplayCount />

              {/* Form */}
              <Form onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder='Enter here'
                    value={todo.title}
                    onChange={e => setTodo({ ...todo, title: e.target.value })}
                  />
                </Form.Group>
                {/* description */}
                <Form.Group className='mt-3'>
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control as={"textarea"}
                    type="text"
                    placeholder='Enter here'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                  />
                </Form.Group>
                <Container className='text-center mt-3'>
                  <Button variant='primary' type='submit'>
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => (dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Addtodo)