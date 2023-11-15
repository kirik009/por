import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Auth = () => {
    const dispatch = useDispatch()
    const  authen = useSelector((state) => state.userss.isAuthen);
    const navigate = useNavigate();
    const auth = event => {
        event.preventDefault();
        dispatch(actions.loginUser())
        console.log(authen)
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