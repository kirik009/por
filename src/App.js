import React from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import {useState} from 'react';
import rootReducer from './redux/reducers/rootReducer';
function App() {
    const store = createStore(rootReducer)
    const [isAuth, setIsAuth] = useState(false);
    return (
        <Provider store={store}>
      <AuthContext.Provider value = {{
            isAuth,
            setIsAuth
        }}>
        <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        </BrowserRouter>
        </AuthContext.Provider>
  </Provider>
      
    )
}

export default App;