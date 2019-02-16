import React, {Component} from 'react';
import '../style/AppComponent.css';

class Heading extends Component{


    render(){
        return (
            <div className="header">
                {this.props.heading}
            </div>
        )
    }
}
export default Heading;