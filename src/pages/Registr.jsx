import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/index.js';

const Registr = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    const Reg = event => {
        event.preventDefault();
        setIsAuth(true);
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