import React from 'react'
import MyButton from "../components/button/MyButton"
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice';

const Registr = () => {
    const chars = useSelector((state) => state.userss.characters);
    console.log(Object.values(chars))
    const maxId = Object.values(chars).at(-1).id
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const Reg = event => {
        event.preventDefault();
        let fn = document.getElementById('elem1').value
        let ln = document.getElementById('elem2').value
        let em = document.getElementById('elem3').value
        dispatch(actions.regUser({id: maxId + 1, firstName: fn, lastName:ln, email: em}))
        navigate('/users/' + fn + '/' + ln + '/' + em)
    }
    return (
        <div style={{textAlign: "center"}}>
            <form onSubmit={Reg}>
                <input id="elem1" type="text" placeholder="FirstName"></input>
                <input id="elem2" type="text" placeholder="LastName"></input>
                <input id="elem3" type="text" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <MyButton>Registry</MyButton>        
            </form>
        </div>
    )
}

export default Registr