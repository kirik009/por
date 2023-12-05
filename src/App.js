import React, { useEffect } from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import {Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react';
import { store} from './redux/store';
import { actions } from './redux/slices/userSlice';
function App() {
   
    const [isAuth, setIsAuth] = useState(false);
    return (
     
            <Provider store={store}>
        <BrowserRouter>
        
        <AppRouter/>
        </BrowserRouter>
        </Provider>
    )
}

export default App;