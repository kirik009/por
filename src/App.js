import React from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import {Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import {useState} from 'react';
<<<<<<< HEAD
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { store} from './redux/store';
function App() {
=======
//import {store} from './redux/store'
import {store} from './redux/reducers/rootReducer'
function App() {

>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
    const [isAuth, setIsAuth] = useState(false);
    return (
      <AuthContext.Provider value = {{
            isAuth,
            setIsAuth
        }}>
            <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        </BrowserRouter>
        </Provider>
        </AuthContext.Provider>
      
    )
}

export default App;