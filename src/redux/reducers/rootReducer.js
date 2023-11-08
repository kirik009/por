import { combineReducers, configureStore} from '@reduxjs/toolkit'
import dataUsersReducer from '../reducers/dataUsers.reducer'
import usersReducer from '../reducers/user.reducer'
import userSlice from '../slices/userSlice'

 const rootReducer = combineReducers({
   userss: userSlice
})

export const store = configureStore( {
   reducer:rootReducer,
})


// const createRootReducer = (history) => {
//   return combineReducers({
//     router: connectRouter(history),
//     createUser: signupReducer,
//   });
// };

// const createRootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   createUser: signupReducer,
// });

// const createRootReducer = (history) => {
//   combineReducers({
//     router: connectRouter(history),
//     createUser: signupReducer,
//   });
// };

 //export default rootReducer;