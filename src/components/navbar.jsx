import React from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Navbar = () => {
    const  authen = useSelector((state) => state.userss.isAuthen);
    const dispatch = useDispatch()

    return (
        authen ?  
<div className='navbar'>
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
                
                <Link to='/auth' onClick={() => dispatch(actions.exUser())}>Выйти</Link>
        
        
                
            </div>
        </div>
        :
        <div className='navbar'>
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
<Link to='/auth' onClick={() => dispatch(actions.loginUser())}>Вoйти</Link>
</div>
        </div>
    )
}

export default Navbar