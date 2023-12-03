import React, { cloneElement, useEffect, Children, useState } from 'react';
import Table from '../components/Table.jsx';
import Form from '../components/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice.js';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';



const Users = () => {
    const dispatch = useDispatch()
    let  authen = useSelector((state) => state.userss.characters);
    
      
const removeCharacter = id => {
    dispatch(actions.deleteUser(id))
    console.log(authen)
   console.log(Cookies)
}

const handleSubmit = character => {
    dispatch(actions.addUser(character)) 
   console.log(authen)
}

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.json();
    })
    .then ((data) => {
        console.log(data[1]["name"]);
        for(let i = 0; i< data.length; i++)
        {dispatch(actions.addUser({id:data[i]["id"],firstName: data[i]["name"],lastName: data[i]["username"],email: data[i]["email"] })) }
        
    }
    )
}, [])

return (
    <div >
        <h1>Users</h1>
        
      {authen && <Table
          characterData={authen}
          removeCharacter={removeCharacter}
      />}
       
        <Form handleSubmit={handleSubmit} />
    </div>
);
}
export default Users