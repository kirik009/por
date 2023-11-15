import React, { useContext } from 'react'
import { AuthContext } from '../context/index.js';
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        
<div className='navbar'>
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
                <Link to='/auth' onClick={() => dispatch(actions.exUser())}>Войти</Link>
                {/* <Link to='/auth' onClick={() => dispatch(actions.exUser())}>Войти</Link> */}
            </div>
        </div>
        
    )
}

export default Navbar