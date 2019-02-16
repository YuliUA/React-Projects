import React, {Component} from 'react';
import '../style/AppComponent.css';
import Heading from './Heading';
import InitUser from './InitUser';

class AppComponent extends Component{
  
    render(){
        return (
            <div className = "container">
                <Heading heading = {this.props.heading} />
                <InitUser />
            </div>
        )
    }
};

AppComponent.defaultProps = {
            heading: 'Simple Survey'
    };



export default AppComponent;