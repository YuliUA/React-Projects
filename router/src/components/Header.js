import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header className="header">
                <nav>
                    <ul>
                        <li><Link exact='true' to= '/'>Home</Link></li>
                        <li><Link to= '/players'>Players</Link></li>
                        <li><Link to= '/schedule'>Schedule</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;