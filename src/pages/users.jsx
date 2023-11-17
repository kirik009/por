import React, { useState } from 'react';
import Table from '../components/Table.jsx';
import Form from '../components/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice.js';
import {Link, useNavigate } from 'react-router-dom';

const Users = () => {
    const dispatch = useDispatch()
    const  authen = useSelector((state) => state.userss.characters);
    const navigate = useNavigate();
    const [state, setState] = useState({
        characters :[]

    });

const removeCharacter = id => {
    const { characters } = state;

   dispatch(actions.remove())
}

const handleSubmit = character => {
    setState({characters: [...state.characters, character]});
}

return (
    <div className="container">
        <h1>Users</h1>
        <Table
            characterData={state.characters}
            removeCharacter={removeCharacter}
        />
        <Form handleSubmit={handleSubmit} />
    </div>
);
}
export default Users