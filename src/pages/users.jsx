import React, {useContext, useEffect, useState } from 'react';
import Table from '../components/Table.jsx';
import Form from '../components/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice.js';
import {Await, Link } from 'react-router-dom';
import { Context } from '../index.js';
import {  doc, deleteDoc, getFirestore, query, collection,where, getDocs, updateDoc, onSnapshot, orderBy } from "firebase/firestore";
import { wait } from '@testing-library/user-event/dist/utils/index.js';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const  Users =  () => {
    const dispatch = useDispatch()
    let  authen = useSelector((state) => state.userss.characters);
    const {firestore} = useContext(Context)
    const auth = getAuth()
    const [chars, setChars] = useState([])
    let c = []
    useEffect(() =>{
        const collectionRef = collection(firestore, "chars")
        const q = query(collectionRef, orderBy("id", "asc"))
   onSnapshot(q, (snapshot) => 
   setChars(snapshot.docs.map((doc) => doc.data()
   )))
}


    , [])
      
 chars.forEach(  (obj) => {
    c.push({id: obj.idd, firstName: obj.firstName, lastName: obj.lastName, email: obj.email
   } )})

console.log(getAuth())
const  removeCharacter =  async (i) => {

    dispatch(actions.deleteUser(i))
    const CollectionRef = collection(firestore,"chars")
    const q = query(CollectionRef, where("id", "==", i + 1))
    const snapshot = await getDocs(q)
   const result = snapshot.docs[0].id 
   const docRef = doc(firestore, "chars", result);
   deleteDoc(docRef);
     const q2 = query(CollectionRef, where("id", ">", i + 1, orderBy("id", "asc")))
     const snapshot2 = await getDocs(q2)
    const results = snapshot2.docs.map((doc) => ({...doc.data(), id: doc.id}));
    results.forEach(async (result) => {
        const docRef = doc(firestore, "chars", result.id);
        if(i===0){await updateDoc(docRef, {id: results.indexOf(result) + 1})}
        else
        {await updateDoc(docRef, {id: results.indexOf(result) + 2})}
        
    })
    
}
const handleSubmit = async (character) => {
    dispatch(actions.addUser(character)) 
    await firestore.collection('chars').add({...character, idd: character.id})
    const CollectionRef = collection(firestore,"chars")
    const q = query(CollectionRef, orderBy("id", "asc"))
    const snapshot = await getDocs(q)
    
    
     const results = snapshot.docs[snapshot.docs.length-1].id
     let l = 0
     if(snapshot.docs.length==1){}
     else
     {const result = snapshot.docs[snapshot.docs.length-2]
     l = result.data().id
     }
    
        const docRef = doc(firestore, "chars", results);
       await updateDoc(docRef, {id: l + 1})
}

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         return res.json();
//     })
//     .then ((data) => {
//         console.log(data[1]["name"]);
//         for(let i = 0; i< data.length; i++)
//         {
//             dispatch(actions.addUser({id:data[i]["id"],firstName: data[i]["name"],lastName: data[i]["username"],email: data[i]["email"] })) 
//     }  
//     }
//     )
// }, [])
const handleClick = () => {
    if(auth === undefined){
        dispatch(actions.exUser())
    }else{
      auth.signOut() 
    dispatch(actions.exUser())
    }
       
        
    
    
}

    return (
    <div>
        <div className='navbar'>
                <div className='navbar_links'>
                    <Link to='/auth' onClick={handleClick} >Выйти</Link>
                </div>
            </div>
    <div >
        <h1>Users</h1>
        
       {c && <Table
          characterData={c}
          removeCharacter={removeCharacter}
      />}       
        <Form handleSubmit={handleSubmit} />
    </div>
    </div>
);
      }

export default Users