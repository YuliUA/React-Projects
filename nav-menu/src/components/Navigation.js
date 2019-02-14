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
        this.componentGenerator = this.componentGenerator.bind(this)
    }

    handleChange(page){
        this.setState({
            currentPage: page
        });
    }

    componentGenerator (page){
        let compo;
        switch(page){
            case 'Home': 
                compo = <Jumbo heading = {this.props.heading} text = {this.props.text}/>;
                break;
            case 'Registration':
                compo = <Registr />;
                break;
            case 'Sign In':
                compo = <LogIn />;
                break;
            default:
                compo = '';
                break;            
        }
        return compo;
    }



    render(){
        return(
            <div>
                <Navbar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                {this.componentGenerator(this.state.currentPage)}
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