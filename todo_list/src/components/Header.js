import React, {Component} from 'react';


class Header extends Component{
   
    setDate(){
        let today = new Date();
        let options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        };
        let date = today.toLocaleDateString("en-us",options)
        return date
    }
    render(){
        return(
            <div>
                <h1>TODO's List</h1>
                <h2> {this.setDate()} </h2>
            </div>
        )
    }
}
export default Header; 