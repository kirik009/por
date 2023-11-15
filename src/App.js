import React from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import {useState} from 'react';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { store} from './redux/store';
function App() {
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