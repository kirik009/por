import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   characters : [{
        id: 1,
        firstName: '',
        lastName: '',
        email: ''
   }
   ],
    isAuthen: false
}

function isfn (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].firstName == first)
  return true
}
return false
}
function isln (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].lastName == first)
     return true
    
  }
   return false
}
function isEm (char, first){
  for (let l = 0; l < char.length; l++) {
    if(char[l].email == first)
  return true
}
return false
}
const userSlice = createSlice({
    name: 'userss',
    initialState,
    reducers : {
      remove(state) {} ,
      addUser () {},
      deleteUser () {},
      regUser (state, action) {
        if(isfn(state.characters, action.payload.firstName) &&
        isln(state.characters, action.payload.lastName) &&
        isEm(state.characters, action.payload.email)) 
        {alert("Регистрация нового пользователся не проходит, вы какое-то поле ввели не так")
        } else {state.characters.push(action.payload)
          state.isAuthen=true }
    }},
      loginUser (state, action) {
        if(!isfn(state.characters, action.payload.firstName) &&
        !isln(state.characters, action.payload.lastName) &&
        !isEm(state.characters, action.payload.email)) 
        {state.isAuthen = true} else{alert("Такого пользователя нет")}
        },
    exUser (state) {
        state.isAuthen = false}
    
})

export default userSlice
export const {actions, reducer} = userSlice
