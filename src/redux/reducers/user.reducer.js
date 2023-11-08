import {
    LOGIN_USER,
    REG_USER,
  } from '../constants/ActionTypes'
const iState = {
  // login:'',
  // password:'',
  isAuth: false
};

export default function usersReducer(state = iState, action) {
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
                //  login: action.login,
                //   pass: action.pass,
                  isAuth: action.isAuth
                }
              ]
        
            case REG_USER:
              return    [
                ...state,
                {
                //  login: action.login,
                //   pass: action.pass,
                  isAuth: action.isAuth
                }
              ]
          default:
              return state
          }
  }
  