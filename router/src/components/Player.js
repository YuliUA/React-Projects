import React, {Component} from 'react';
import PlayerAPI from './api';
import {Link} from 'react-router-dom';

class Player extends Component{
   constructor(props){
        super(props);
        this.state={
            player: PlayerAPI.get(
                parseInt(props.match.params.number, 10)
            )
        }
   }; 
   
   render(){
       if ( !this.state.player ){
            return <div>404 can't find player by id</div>
        }
        return(
            <div>
                <h1>{this.state.player.name} (#{this.state.player.number})</h1>
                <h2>Position: {this.state.player.position}</h2>
                <Link to='/players'>Back</Link>
            </div>
        )
    }
}
export default Player;