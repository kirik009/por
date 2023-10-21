import {
    ADD_USER,
    DELETE_USER,
  } from '../constants/ActionTypes'
  
  const initialState = 
    {
        id: 1,
        firstName: '',
        lastName: '',
        email: ''
    };
  
  
  export default function dataUsersReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_USER:
        return    [
          ...state,
          {
            id: state.id + 1,
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email
          }
        ]
  
      case DELETE_USER:
        return state.filter(todo =>
          todo.id !== action.id
        )
    default:
        return state
    }
  }
  