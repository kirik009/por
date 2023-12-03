import React, {useEffect} from 'react'
import MyButton from "../components/button/MyButton"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {actions, isUn} from '../redux/slices/userSlice';

const Registr = () => {

    const  users = useSelector((state) => state.userss.users);
    let maxId = 1
    if(users.length===0){
         maxId =1
    } else{  maxId = users.length + 1 }
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
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
        <div style={{textAlign: "center"}}>
            <form onSubmit={Reg}>
                <input id="elem1" type="text" placeholder="Username"></input>
                <input id="elem2" type="password" placeholder="Password"></input>
                <MyButton>Registry</MyButton>        
            </form>
        </div>
    )
}

export default Registr