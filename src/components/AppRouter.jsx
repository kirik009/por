import React from 'react'
import {privateRoutes, publicRoutes} from "../router/index.js"
import {Navigate, Route, Routes } from 'react-router-dom';
import {Auth} from "../pages/Auth.jsx"
import {Registr} from "../pages/Registr.jsx"
import {useSelector } from 'react-redux';
const AppRouter = (props) => {
    const {firstName, lastName, email} = props
    const  authen = useSelector((state) => state.userss.isAuthen);
    return (
        authen
        ?
    <Routes>
{privateRoutes.map(route => 
    <Route 
     path ={route.path}
     element={<route.element firstName={firstName} lastName={lastName} email={email}/>} 
     key={route.path}
     />
)}
                <Route path="/" element={<Navigate replace to="/users/:firstName/:lastName/:email" />} />
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