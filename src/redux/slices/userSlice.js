import { createSlice } from "@reduxjs/toolkit";
import users from "../../pages/users";


const initialState = {
   characters : [{
        id: 1,
        firstName: '',
        lastName: '',
        email: '',
   }
   ],
    isAuthen: false
}

const userSlice = createSlice({
    name: 'userss',
    initialState,
    reducers : {
      addUser () {},
      deleteUser () {},
      regUser (state) {
        state.isAuthen = true
        state.characters.push({id: 1, firstName: 'kirikk', lastName: 'nafds', email: 'dfdf'}) 
    },
      loginUser (state) {
        state.isAuthen = true}
    },
    exUser (state) {
        state.isAuthen = false}
    
})

export default userSlice
export const {actions, reducer} = userSlice