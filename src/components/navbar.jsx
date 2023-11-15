import React, { useContext } from 'react'
import { AuthContext } from '../context/index.js';
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Navbar = () => {
<<<<<<< HEAD
    const dispatch = useDispatch()
=======
   // const {isAuth, setIsAuth} = useContext(AuthContext);
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
    return (
        
<div className='navbar'>
    
            <div className='navbar_links'>
                <Link to='/users'>Пользователи</Link>
<<<<<<< HEAD
                <Link to='/auth' onClick={() => dispatch(actions.exUser())}>Войти</Link>
                {/* <Link to='/auth' onClick={() => dispatch(actions.exUser())}>Войти</Link> */}
=======
                <Link to='/auth'>Войти</Link>
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
            </div>
        </div>
        
    )
}

export default Navbar