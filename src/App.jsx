// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container } from 'react-bootstrap';
import DisplayTodos from './Components/DisplayTodos';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import AddTodo from './Components/AddTodo';

const App = () => {
  return (
    <Provider store={store}>
      <Container className='py-3'>
        <AddTodo />
        <DisplayTodos />
      </Container>
    </Provider>
  )
}

export default App