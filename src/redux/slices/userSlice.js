import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { useContext } from "react";
import { Context } from "../..";
import { getFirestore } from "firebase/firestore";

let r= []
for(let i=1;i<=localStorage.length; i++){
  r.push(JSON.parse(localStorage.getItem(`users${i}`)))
}

const initialState = {
   characters : [
   ],
   users : 
  r
   
,
    isAuthen: Cookies.get('au'),
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
  if(char.length===0){ return false}
 
else
{
  for (let l = 0; l < char.length; l++) {
    if(char[l].username === first)
  return true
}
return false
}
  
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
        state.characters = state.characters.filter((character, i) => { return i !== action.payload;})
      },
      regUser (state, action) {
          if(
            isUn(state.users, action.payload.username)) 
            {alert("Регистрация нового пользователся не проходит, вы используете уже существующий username")
            } else {
              
                state.users.push(action.payload)
                localStorage.setItem(`users${action.payload.id}`, JSON.stringify(action.payload))
             
             }
        },
    regUserCoo (state, action) {
      for(let i =0; i < action.payload.length; i++){
        state.users.push(action.payload[i])
      }    
           
  },
      loginUser (state) {
         state.isAuthen = 'true'
         Cookies.set('au', 'true', { expires: 7 });
        },
    exUser (state) {
        state.isAuthen = 'false'
       Cookies.set('au', 'false', { expires: 7 });
      },
     
    
}})

export default userSlice
export const {actions, reducer} = userSlice
export {isUn, isEm, isPass, isfn, isln}
