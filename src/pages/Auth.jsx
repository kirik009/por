import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/index.js';
//import { useActions } from '../useActions';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { loginUser } from '../redux/slices/userSlice';


const Auth = () => {
const dispatch = useDispatch()
   // const {isAuth, setIsAuth} = useContext(AuthContext)
    const  isAuthen = useSelector(state => state.userss.isAuthen);
    //const {loginUser} = useActions()
    const navigate = useNavigate();
    const auth = event => {
         event.preventDefault();
        dispatch(loginUser())
        navigate('/users')
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1 >Welcome!</h1>
            <p >Login to get started</p>
            <form onSubmit={auth}>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <MyButton>Login</MyButton>
            </form>
            <div class="myDiv">
             First time here?<Link class="myLink" to='/registr'>Create your account</Link>
            </div>
        </div>
    )
}

export default Auth