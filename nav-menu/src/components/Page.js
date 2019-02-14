import React, {Component} from 'react';

class Page extends Component{
    render(){
        let pageContent;
        if(this.props.currentPage === 'Home'){
            pageContent = 'This is the home page';
        } else if(this.props.currentPage === 'About'){
            pageContent = 'This is the about page'
        } else if(this.props.currentPage === 'Contact'){
            pageContent = 'This is the contact page'
        } else if(this.props.currentPage === 'Registration'){
            pageContent = 'This is the registration page'
        } else if(this.props.currentPage === 'Sign In'){
            pageContent = 'This is the sign in page'
        } else{
            pageContent = 'This is home'
        }

        return(
            <div className="container">
                <h2>{this.props.currentPage}</h2>
                {pageContent}
            </div>
        )
    }
}
export default Page;