import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Form = (props) => {
    let  authen = useSelector((state) => state.userss.characters);
    const [state, setState] = useState({
        id: 1,
        firstName: '',
        lastName: '',
        email: ''
    });

   const handleChange = event => {
        const { name, value } = event.target;
        setState({...state,
            [name] : value
        });
        
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
       if(!Object.values(state).includes('')){
            props.handleSubmit(state);
            setState({
                id: state.id+1,
                firstName: '',
                lastName: '',
                email: ''
            });
       }
       else {
        alert('Есть пустое поле, исправьте пожолуйста')
       }
    }
return (
    <form onSubmit={onFormSubmit}>
        <label for="firstName">FirstName</label>
        <input 
            type="text" 
            name="firstName" 
            id="firstName"
            value={state.firstName} 
            onChange={handleChange} />
        <label for="lastName">LastName</label>
        <input 
            type="text" 
            name="lastName" 
            id="lastName"
            value={state.lastName} 
            onChange={handleChange} />
            <label for="email">Email</label>
        <input 
            type="text" 
            name="email" 
            id="email"
            value={state.email} 
            onChange={handleChange} />
        <button type="submit">
            Add User
        </button>
    </form>
);
}
export default Form