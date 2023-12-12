import React, { useContext, useEffect } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {actions, isPass, isUn} from '../redux/slices/userSlice';
import Cookies from 'js-cookie';

const Auth = () => {
    const {authh} = useContext(Context)

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider(
           // const {user}
        )
    }
    const dispatch = useDispatch()
    const  users = useSelector((state) => state.userss.users);
    const navigate = useNavigate();
    const auth = event => {
        console.log(Cookies.get('au'))
        //localStorage.clear()
        let user = document.getElementById('elemm1').value
        let pass = document.getElementById('elemm2').value
       
        event.preventDefault();
        if(isUn(users, user))
        {
          if(isPass(users, user, pass))
          {
            {dispatch(actions.loginUser())
    navigate('/users/' + user)}
    Cookies.set('curr', user, { expires: 7 });
} else {alert("Вы ввели неправильный пароль")}
   
}
    else {alert("Такого пользователя нет")
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