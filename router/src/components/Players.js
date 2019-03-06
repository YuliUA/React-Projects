import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Player from './Player';
import FullPlayers from './FullPlayers';

class Players extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/players' component={FullPlayers} />
                <Route path='/players/:number' component={Player} />
            </Switch>
        )
    }
}
export default Players;