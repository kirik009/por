import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
   characters : [
  //   {
  //       id: 1,
  //       firstName: '',
  //       lastName: '',
  //       email: ''
  //  }
   ],
   users : [
    {
    id: 1,
    username: '',
    password: ''
}
],
    isAuthen: false,
}

function isPass (char, user, pass){
  for (let l = 0; l < char.length; l++) {
    if(char[l].username === user){
      if(char[l].password === pass)
      return true
}
}
return false
}
function isUn (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].username === first)
  return true
}
return false
}
function isfn (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].firstName === first)
  return true
}
return false
}
function isln (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].lastName === first)
     return true
    
  }
   return false
}
function isEm (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].email === first)
  return true
}
return false
}

const userSlice = createSlice({
    name: 'userss',
    initialState,
    reducers : {
      addUser (state, action) {
        if(state.characters.length ===0)
        {action.payload.id = 1
        }else{action.payload.id = Object.values(state.characters).at(-1).id + 1}
      state.characters.push(action.payload)
      },
      deleteUser (state, action) {   
        state.characters = state.characters.filter((character, i) => { return i !== action.payload;
        })},
      regUser (state, action) {
        if(
        isUn(state.users, action.payload.username)) 
        {alert("Регистрация нового пользователся не проходит, вы используете уже существующий username")
        } else {
          if(Object.values(state.users).at(-1).id === 1) {
            state.users.pop()
            state.users.push(action.payload)
          } else
          state.users.push(action.payload)}
    },
      loginUser (state) {
         state.isAuthen = true
        },
    exUser (state) {
        state.isAuthen = false}
    
}})

export default userSlice
export const {actions, reducer} = userSlice
export {isUn, isEm, isPass, isfn, isln}
