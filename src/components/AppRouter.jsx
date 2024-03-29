import React, { useContext } from 'react'
import {privateRoutes, publicRoutes} from "../router/index.js"
import {Navigate, Route, Routes } from 'react-router-dom';
import {Auth} from "../pages/Auth.jsx"
import {Registr} from "../pages/Registr.jsx"
import {useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { Context } from '../index.js';
import {useAuthState} from "react-firebase-hooks/auth"
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AppRouter = () => {
    
   const auth = getAuth()
   const [user]= useAuthState(auth)
    const  authen = useSelector((state) => state.userss.isAuthen);
 let authe = false
    if(authen === 'true'){authe = true}
    
else{authe = false}
const aut = Cookies.get('curr');
    if (user) { return (

        
        
        <Routes>
    {privateRoutes.map(route => 
        <Route 
         path ={route.path}
         element={<route.element/>} 
         key={route.path}
         />
    )}
                    <Route path="*" element={<Navigate replace to={`/users`} />} />
                    </Routes>)}


 else if(authe){ return (       
    <Routes>
{privateRoutes.map(route => 
    <Route 
     path ={route.path}
     element={<route.element/>} 
     key={route.path}
     />
)}
                <Route path="*" element={<Navigate replace to={`/users/${aut}`} />} />
                </Routes>)}
   
        
        else { return (<Routes>
            {publicRoutes.map(route => 
                <Route 
                 path ={route.path}
                 element={<route.element />} 
                 key={route.path}
                 />
            )}
            <Route path="*" element={<Navigate replace to="/auth" />} />
            </Routes>)
            }
        }

export default AppRouter;