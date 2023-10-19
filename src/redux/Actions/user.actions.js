import * as types from '../constants/ActionTypes'

export const addUser = (firstName, lastName, email) => ({ type: types.ADD_USER, firstName, lastName, email })
export const deleteUser = id => ({ type: types.DELETE_USER, id })
export const loginUser = (login, pass) => ({ type: types.LOGIN_USER, login, pass })
export const regUser = (login, pass) => ({ type: types.REG_USER,  login, pass })