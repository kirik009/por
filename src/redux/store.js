<<<<<<< HEAD
import {combineReducers, createStore} from "redux"
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
=======
import {createStore} from "redux"
import reducer from "./reducers/rootReducer"
//import { configureStore } from "@reduxjs/toolkit"

//export const store = createStore(reducer)
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
