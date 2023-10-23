import React from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import {Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import {useState} from 'react';
import {store} from './redux/store'
function App() {

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