import { createSlice } from "@reduxjs/toolkit";

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
      regUser () {},
      loginUser (state) {
        state.isAuthen = !state.isAuthen}
    }
})

export default userSlice
export const {addUser, deleteUser, regUser, loginUser} = userSlice.actions