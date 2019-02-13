import React, {Component} from 'react';

class Navbar extends Component{
    constructor(){
        super();
        this.change= this.change.bind(this);
    }

    change (page){
        this.props.change(page);
    }
    render(){
        return(
         <nav className="navbar navbar-default">
             <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">{this.props.brand}</a>
              </div>
              <div id="navbar">
                <ul className="nav navbar-nav">
                  <li className={(this.props.currentPage === 'Home') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'Home')} href="#">Home</a></li>
                  <li className={(this.props.currentPage === 'About') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'About')} href="#">About</a></li>
                  <li className={(this.props.currentPage === 'Contact') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'Contact')} href="#">Contact</a></li>
                  <li className={(this.props.currentPage === 'Rehistration') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'Registration')} href="#">Registration</a></li>
                  <li className={(this.props.currentPage === 'Sign In') ? 'active': ''}>
                    <a onClick={this.change.bind(this,'Sign In')} href="#">Sign In</a></li>
                </ul>
              </div>
            </div>
          </nav>


        );
    }
}
export default Navbar;