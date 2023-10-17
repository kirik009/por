import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link } from 'react-router-dom';
import { AuthContext } from '../context/index.js';

const Registr = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const Reg = event => {
        event.preventDefault();
        setIsAuth(true);
    }
    return (
        <div style={{textAlign: "center"}}>
            <Link to="/users">
            <form onSubmit={Reg}>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <MyButton>Registry</MyButton>        
            </form>
            </Link>  
        </div>
    )
}

export default Registr