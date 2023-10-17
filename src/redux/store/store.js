import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../_reducers/users.reducer';
const mainReducer = combineReducers({
user : reducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)
));
export default store;