import React, { cloneElement, useEffect, Children, useState, useContext } from 'react';
import Table from '../components/Table.jsx';
import Form from '../components/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice.js';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Context } from '../index.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, deleteDoc, collection, onSnapshot, setDoc } from "firebase/firestore";


const Users = () => {
    let chars = []
    let ids = []
    const dispatch = useDispatch()
    let  authen = useSelector((state) => state.userss.characters);
    const {auth} = useContext(Context)
    const {authhh, firestore} = useContext(Context)
const  removeCharacter =  (id) => {
    dispatch(actions.deleteUser(id))
   console.log(id)
   console.log(authen)
    firestore.collection("chars").where("id", "==", id+1).get()
    .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
    });
    onSnapshot(collection("chars"), (snapshot) =>
    snapshot.docs.map((doc) => chars.push(doc.data), ids.push(doc.id))
    )
    for(let i = id + 1; i < chars.length; i++) {
        chars.id = i
    }
    
    let n = ids[id-2];
    
    for(n; n < chars.length; n++){
        const docRef = doc(collection("chars"), ids[id])
        setDoc(docRef, chars[i])
    }
    
}

const handleSubmit = character => {
    dispatch(actions.addUser(character)) 
    firestore.collection('chars').add(character)
}

useEffect(() => {
   // let chars = []
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.json();
    })
    .then ((data) => {
        console.log(data[1]["name"]);
        for(let i = 0; i< data.length; i++)
        {
            //dispatch(actions.addUser({id:data[i]["id"],firstName: data[i]["name"],lastName: data[i]["username"],email: data[i]["email"] })) 
        chars.push({id:data[i]["id"],firstName: data[i]["name"],lastName: data[i]["username"],email: data[i]["email"] })
    }  
    }
    )
}, [])
const handleClick = () => {
    if(auth === undefined)
    dispatch(actions.exUser())
    else
    auth.signOut()
}

    return (
    <div>
        <div className='navbar'>
                <div className='navbar_links'>
                    <Link to='/auth' onClick={handleClick
                    } >Выйти</Link>
                </div>
            </div>
    <div >
        <h1>Users</h1>
        
      {authen&& <Table
          characterData={authen}
          removeCharacter={removeCharacter}
      />}
       
        <Form handleSubmit={handleSubmit} />
    </div>
    </div>
);

}
export default Users