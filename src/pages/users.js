import React, { Component } from 'react';
import Table from '../components/Table';
import Form from '../components/Form';

class users extends Component {
    state = {
        characters: []
    };

    removeCharacter = id => {
        const { characters } = this.state;
    
        this.setState({
                characters: characters.filter((character, i) => { return i !== id;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>Users</h1>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default users;