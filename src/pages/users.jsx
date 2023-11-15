import React, { Component } from 'react';
import Table from '../components/Table.jsx';
import Form from '../components/Form.jsx';
const users = () => {
    const dispatch = useDispatch()
    const  authen = useSelector((state) => state.userss.characters);
    const navigate = useNavigate();
    state = {
        characters: []
    };
const removeCharacter = id => {
    const { characters } = this.state;

    setState({
            characters: characters.filter((character, i) => { return i !== id;
        })
    });
}

const handleSubmit = character => {
    setState({characters: [...state.characters, character]});
}

return (
    <div className="container">
        <h1>Users</h1>
        <Table
            characterData={characters}
            removeCharacter={removeCharacter}
        />
        <Form handleSubmit={handleSubmit} />
    </div>
);
}
export default users