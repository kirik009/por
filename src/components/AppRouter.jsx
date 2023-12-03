import React from 'react'
import {privateRoutes, publicRoutes} from "../router/index.js"
import {Navigate, Route, Routes } from 'react-router-dom';
import {Auth} from "../pages/Auth.jsx"
import {Registr} from "../pages/Registr.jsx"
import {useSelector } from 'react-redux';
import jsCookie from 'js-cookie';
import Cookies from 'js-cookie';
const AppRouter = (props) => {
    const {username} = props
    const  authen = useSelector((state) => state.userss.isAuthen);
 let authe = false
    if(authen === 'true'){authe = true}
    
else{authe = false}
    return (
        authe
        ?
    <Routes>
{privateRoutes.map(route => 
    <Route 
     path ={route.path}
     element={<route.element username={username}/>} 
     key={route.path}
     />
)}
                <Route path="/" element={<Navigate replace to="/users/:username" />} />
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