
import * as types from '../constants/ActionTypes'

export const addUser = (firstName, lastName, email) => ({ type: types.ADD_USER,firstName, lastName, email })
export const deleteUser = id => ({ type: types.DELETE_USER, payload: id })
export const loginUser =  isAuth => ({ type: types.LOGIN_USER, isAuth })
export const regUser =  isAuth => ({ type: types.REG_USER, isAuth})