import React, {Component} from 'react';
import dataUsers from "../redux/reducers/dataUsers.reducer"
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = this.initialState;
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }


    onFormSubmit = (event) => {
        event.preventDefault();
       if(!Object.values(this.state).includes('')){
            this.props.handleSubmit(this.state);
            this.state.id++;
            this.setState(this.initialState);
       }
    }

    render() {
        const { firstName, lastName, email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="firstName">FirstName</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={firstName} 
                    onChange={this.handleChange} />
                <label for="lastName">LastName</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    value={lastName} 
                    onChange={this.handleChange} />
                    <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Add User
                </button>
            </form>
        );
    }
}

export default Form;
