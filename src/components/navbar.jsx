import React from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Navbar = () => {
    //const dispatch = useDispatch(actions.exUser())
    return (
        
<div className='navbar'>
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
                <Link to='/auth' >Войти</Link>
            </div>
        </div>
        
    )
}

export default Navbar