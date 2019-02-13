import React, {Component} from 'react';
import Navbar from './Navbar';
import Jumbo from './Jumbo';
import Registr from './Registr';
import LogIn from './LogIn';
import Page from './Page';

class Navigation extends Component{
    constructor(){
        super();
        this.state ={
            currentPage: 'home'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(page){
        this.setState({
            currentPage: page
        });
    }

    render(){
        let jumboComponent;
        if(this.state.currentPage == 'Home'){
            jumboComponent = <Jumbo heading={this.props.heading} text={this.props.text} />;
        } else {
            jumboComponent = '';
        }
        let registrComponent;
        if(this.state.currentPage == 'Registration'){
            registrComponent = <Registr />
        } else {
            registrComponent=''
        }
        let logInComponent;
        if(this.state.currentPage == 'Sign In'){
            logInComponent = <LogIn />
        } else {
            logInComponent =''
        }
        return(
            <div>
                <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                {jumboComponent}
                {registrComponent}
                {logInComponent}
                <Page currentPage={this.state.currentPage} />
            </div>
        );
    }
}
Navigation.defaultProps = {
    brand: 'ReactNavigation',
    heading: 'Hello, Logos!',
    text: 'This is demo App created by Me '
}
export default Navigation;