import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/index.js';

const Auth = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const navigate = useNavigate();
    const auth = event => {
        event.preventDefault();
        setIsAuth(true);
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