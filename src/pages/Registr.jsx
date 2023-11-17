import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Registr = () => {
    const dispatch = useDispatch()
     const  authen = useSelector((state) => state.userss.characters);
     const navigate = useNavigate();
    const Reg = event => {
        event.preventDefault();
        dispatch(actions.regUser())
        console.log(authen)
        navigate('/users')
    }
    return (
        <div style={{textAlign: "center"}}>
            <form onSubmit={Reg}>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <MyButton>Registry</MyButton>        
            </form>
        </div>
    )
}

export default Registr