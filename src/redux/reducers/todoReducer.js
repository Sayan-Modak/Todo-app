
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  // if (action.type === ADD_TODO) {
  //   // add todo
  // } else if (action.type === DELETE_TODO) {
  //   // delete todo
  // } else if (action.type === UPDATE_TODO) {
  //   // update todo
  // } else{
  //   // return initial state
  // }

  switch (action.type) {
    case ADD_TODO:
      // add todo
      console.log(action.payload);
      return [...state, action.payload]

    case DELETE_TODO:
      // delete todo
      return state.filter((todo) => todo.id !== action.payload)

    case UPDATE_TODO:
      // update todo
      return state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          todo.title = action.payload.todo.title
          todo.description = action.payload.todo.description
        }
        return todo;
      })

    default:
      return state
  }
}