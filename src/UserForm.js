import React, {Component} from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', description: '', gender: '', acceptTerms: false}
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name:
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label> Gender:
                    <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                        <option>Choose</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Description:
                    <textarea name="description" value={this.state.description}
                              onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label> Accept Terms:
                    <input type="checkbox" name="acceptTerms" checked={this.state.acceptTerms}
                           onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(
            'Username - ' + this.state.userName +
            '\nDescription - ' + this.state.description +
            '\nGender - ' + this.state.gender +
            '\nAccept terms - ' + this.state.acceptTerms)
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    handleAcceptTermsChange = (event) => {
        this.setState({acceptTerms: event.target.checked})
    }
}

export default UserForm;
