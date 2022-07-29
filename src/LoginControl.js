import React, {Component} from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from "./Greeting";

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        let button;
        if (this.state.isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn}/>
                {button}
                {this.props.hasNewMessage && <h2>You have unread messages!!!</h2>}
                {this.props.credit > 0 ? <h3>You have {this.props.credit} credit</h3> : <h3>You have no credits</h3>}
                {this.props.hasWarning ? <h3>You have a warning</h3> : null}
            </div>
        );
    }
}

export default LoginControl;
