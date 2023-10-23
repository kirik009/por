import React , { useContext } from 'react'
import MyButton from "../components/button/MyButton"
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/index.js';
import { useActions } from '../useActions';
import { useDispatch, useSelector } from 'react-redux';

const Registr = () => {
    const dispatch = useDispatch()
//  // const {isAuth, setIsAuth} = useContext(AuthContext)
//  let {login, password, isAuth} = useSelector(state => state.userss || {})
//  const {loginUser} = useActions()
//  const navigate = useNavigate();
//  const auth = event => {
//      event.preventDefault();
//      isAuth = true;
//      dispatch(loginUser('adm', '123',true))
//      //loginUser
//      navigate('/users')
// }
   // const {isAuth, setIsAuth} = useContext(AuthContext)
    let {login, password, isAuth} = useSelector(state => state.userss || {})
    const navigate = useNavigate();
    const {regUser} = useActions()
    const Reg = event => {
        event.preventDefault();
        isAuth = true;
        dispatch(regUser('adm', '123',true))
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