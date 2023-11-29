import React, { useState } from 'react';
import Table from '../components/Table.jsx';
import Form from '../components/Form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../redux/slices/userSlice.js';
import {Link, useNavigate, useParams } from 'react-router-dom';

const Users = () => {
    const dispatch = useDispatch()
    let  authen = useSelector((state) => state.userss.characters);
    // const [state, setState] = useState({
    //     authen
    // });

const removeCharacter = id => {
    // const { authen } = state;
    
    // setState({
    //         authen: authen.filter((character, i) => { return i !== id;
    //     })
    // });
    dispatch(actions.deleteUser(id))
}

const handleSubmit = character => {
    authen.push(character);
}

return (
    <div className="container">
        <h1>Users</h1>
        <Table
            characterData={authen}
            removeCharacter={removeCharacter}
        />
        <Form handleSubmit={handleSubmit} />
    </div>
);
}
export default Users