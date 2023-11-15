import React, {Component} from 'react';
<<<<<<< HEAD
=======
import dataUsers from "../redux/reducers/dataUsers.reducer"
>>>>>>> ca1fea5e244075c0dfa10552023ff55e0ebb8b9a
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = useSelector((state) => state.userss.chars);

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
            // this.setState(this.initialState);
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
