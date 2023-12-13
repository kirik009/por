import React, { useContext, useEffect } from 'react';
import Navbar from './components/navbar'
import AppRouter from './components/AppRouter'
import {Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import {useState} from 'react';
import { store} from './redux/store';
import { actions } from './redux/slices/userSlice';
import { Context } from '.';
//import useAuth
function App() {
   
   const {auth} = useContext(Context)
   //const {user} = useAuthS
    return (
     
            <Provider store={store}>
        <BrowserRouter>
        
        <AppRouter/>
        </BrowserRouter>
        </Provider>
    )
}

export default App;