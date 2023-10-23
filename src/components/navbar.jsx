import React, { useContext } from 'react'
import {Link } from 'react-router-dom';
import { AuthContext } from '../context/index.js';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        
<div className='navbar'>
    
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
                <Link to='/auth' onClick={() => setIsAuth(false)}>Войти</Link>
            </div>
        </div>
        
    )
}

export default Navbar