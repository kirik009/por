import {
    LOGIN_USER,
    REG_USER,
  } from '../constants/ActionTypes'
const iState = {
login:'',
password:'' 
};

export default function users(state = iState, action) {
    // if (action.type === userActionTypes.LOGIN_SUCCESS) {
    //     return {
    //     loggedIn: action.payload.isLoggedIn,
    //     userDetails: action.payload.userData
    //     }}
    //     return state;
        switch (action.type) {
            case LOGIN_USER:
              return    [
                ...state,
                {
                 login: action.login,
                  pass: action.pass
                }
              ]
        
            case REG_USER:
              return    [
                ...state,
                {
                 login: action.login,
                  pass: action.pass
                }
              ]
          default:
              return state
          }
  }
  