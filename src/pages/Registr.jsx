import React, {useEffect} from 'react'
import MyButton from "../components/button/MyButton"
import {BrowserRouter, Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {actions, isUn} from '../redux/slices/userSlice';
import Navbar from '../components/navbar';
import Cookies from 'js-cookie';

const Registr = () => {

    const  users = useSelector((state) => state.userss.users);
    let maxId = 1
    if(users.length===0){
         maxId =1
    } else{  maxId = users.length + 1 }
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const authen = useSelector((state) => state.userss.isAuthen);
        let authe = false
        if(authen === 'true'){authe = true}
        else{authe = false}
        const aut = Cookies.get('curr');
        
    const Reg = event => { 
        
        event.preventDefault();
        let user = document.getElementById('elem1').value
        let pass = document.getElementById('elem2').value
        if(isUn(users, user))
        {alert("Пользователь с таким именем уже есть")
    }
        else
        {dispatch(actions.regUser({id: maxId, username: user, password: pass}))
        navigate('/auth')
        }
        
    
}
    return (
            authe
            ?
            <div>
                <div className='navbar'>
                    <div className='navbar_links'>
                        <Link to={`/users/${aut}`}>Пользователи</Link>
                    <Link to='auth' onClick={() => dispatch(actions.exUser())}>Выйти</Link>
                </div>
            </div><div style={{ textAlign: "center" }}>
                    <form onSubmit={Reg}>
                        <input id="elem1" type="text" placeholder="Username"></input>
                        <input id="elem2" type="password" placeholder="Password"></input>
                        <MyButton>Registry</MyButton>
                    </form>
                </div>
            </div>
            :
            <div>
            <div className='navbar'>
                <div className='navbar_links'>
                    <Link to='/users'>Пользователи</Link>
                    <Link to='/auth' 
                    >Войти</Link>
                </div>
            </div>
        <div style={{textAlign: "center"}}>
            <form onSubmit={Reg}>
                <input id="elem1" type="text" placeholder="Username"></input>
                <input id="elem2" type="password" placeholder="Password"></input>
                <MyButton>Registry</MyButton>        
            </form>
        </div>
        </div>
    )
}

export default Registr