import React from 'react';
import Navbar from "../components/navbar"
import AppRouter from "../components/AppRouter"
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import {useState} from 'react';
function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        
        <AuthContext.Provider value = {{
            isAuth,
            setIsAuth
        }}>
        <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;