import React from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {actions, isPass, isUn} from '../redux/slices/userSlice';

const Auth = () => {
    const dispatch = useDispatch()
    const  authen = useSelector((state) => state.userss.isAuthen);
    const  users = useSelector((state) => state.userss.users);
    const navigate = useNavigate();
    const auth = event => {
        let user = document.getElementById('elemm1').value
        let pass = document.getElementById('elemm2').value
        event.preventDefault();
        if(isUn(users, user))
        {
          if(isPass(users, user, pass))
          {
            {dispatch(actions.loginUser())
    navigate('/users/' + user)}} else {alert("Вы ввели неправильный пароль")}
    }
    else {alert("Такого польователя нет")
}
}
    return (
        <div style={{textAlign: "center"}}>
            <h1 >Welcome!</h1>
            <p >Login to get started</p>
            <form onSubmit={auth}>
                <input id="elemm1" type="text" placeholder="Username"/>
                <input id="elemm2" type="password" placeholder="Password"/>
                <MyButton>Login</MyButton>
            </form>
            <div class="myDiv">
             First time here?<Link class="myLink" to='/registr' >Create your account</Link>
            </div>
        </div>
    )
}

export default Auth