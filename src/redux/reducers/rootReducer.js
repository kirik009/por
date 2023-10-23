import { combineReducers } from 'redux'
import dataUsersReducer from '../reducers/dataUsers.reducer'
import usersReducer from '../reducers/user.reducer'

const rootReducer = () => combineReducers({
   dataUsers: dataUsersReducer,
   userss: usersReducer,
});


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

 export default rootReducer;