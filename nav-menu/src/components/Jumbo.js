import React, {Component} from 'react';

class Jumbo extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>{this.props.heading}</h1>
                        <p className="lead">{this.props.text}</p>
                        <p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Click Me!</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Jumbo;