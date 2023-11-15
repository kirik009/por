import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import users from "../../pages/users";


const initialState = {
   characters : [{
=======

const initialState = {
    characters : [{
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
        id: 1,
        firstName: '',
        lastName: '',
        email: '',
<<<<<<< HEAD
   }
   ],
=======
    }
    ],
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
    isAuthen: false
}

const userSlice = createSlice({
    name: 'userss',
    initialState,
    reducers : {
      addUser () {},
      deleteUser () {},
<<<<<<< HEAD
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
=======
      regUser () {},
      loginUser (state) {
        state.isAuthen = !state.isAuthen}
    }
})

export default userSlice
export const {addUser, deleteUser, regUser, loginUser} = userSlice.actions
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
