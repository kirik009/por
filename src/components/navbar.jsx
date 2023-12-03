import React from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';
import jsCookie from 'js-cookie';
import Cookies from 'js-cookie';

const Navbar = () => {
    const dispatch = useDispatch()
    const authen = useSelector((state) => state.userss.isAuthen);
    let authe = false
    if(authen === 'true'){authe = true}
    
else{authe = false}
    return (
        authe
        ?
<div className='navbar'>
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
                <Link to='/auth' onClick={() => dispatch(actions.exUser())
                } >Выйти</Link>
            </div>
        </div>
        :
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
                <Link to='/auth' 
                >Войти</Link>
            </div>
        </div>
    )
    
            }
export default Navbar