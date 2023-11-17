import {reducer} from "./slices/userSlice"
import { configureStore } from "@reduxjs/toolkit"

// const reducers = combineReducers({
//     userrs: userReducer
// })
// export const store = configureStore({
//     reducer: reducers
// })

export const store = configureStore({
    reducer: {userss: reducer}
})
