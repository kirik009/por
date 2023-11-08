import React from 'react'
import {privateRoutes, publicRoutes} from "../router/index.js"
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/index.js';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    //const  isAuthen = useSelector(state => state.userss.isAuthen);
    return (
        isAuth
        ?
    <Routes>
{privateRoutes.map(route => 
    <Route 
     path ={route.path}
     element={<route.element />} 
     key={route.path}
     />
)}
                <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
        
        :
        
        <Routes>
        {publicRoutes.map(route => 
            <Route 
             path ={route.path}
             element={<route.element />} 
             key={route.path}
             />
        )}
        <Route path="/" element={<Navigate replace to="/auth" />} />
        </Routes>
        
        
    )
}

export default AppRouter;