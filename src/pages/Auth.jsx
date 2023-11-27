import React from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Auth = () => {
    const dispatch = useDispatch()
    const  authen = useSelector((state) => state.userss.isAuthen);
    const navigate = useNavigate();
    const auth = event => {
        let fn = document.getElementById('elemm1').value
        let ln = document.getElementById('elemm2').value
        let em = document.getElementById('elemm3').value
        event.preventDefault();
        dispatch(actions.loginUser())
        navigate('/users/' + fn + '/' + ln + '/' + em)
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1 >Welcome!</h1>
            <p >Login to get started</p>
            <form onSubmit={auth}>
                <input id="elemm1" type="text" placeholder="FirstName"/>
                <input id="elemm2" type="text" placeholder="LastName"/>
                <input id="elemm3" type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <MyButton>Login</MyButton>
            </form>
            <div class="myDiv">
             First time here?<Link class="myLink" to='/registr' >Create your account</Link>
            </div>
        </div>
    )
}

export default Auth