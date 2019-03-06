import React, {Component} from 'react';
import PlayerAPI from './api';
import {Link} from 'react-router-dom';
import PlayersAPI from './api';
import '../style/FullPlayers.css';


class FullPlayers extends Component{
    constructor() {
        super();
        this.state = {
            players: PlayerAPI.all(),
        }
        this.delete = this.delete.bind(this);
        this.change=this.change.bind(this);
        this.addPlayerForm=this.addPlayerForm.bind(this);
    }

    delete(e) {
        let newPlayers = this.state.players.filter(p => p.id.toString() !== e.target.id);
        PlayerAPI.deleteHandle(e.target.id)
        // console.log(newPlayers)
        // console.log(PlayerAPI.deleteHandle(e))
        this.setState({
            players: newPlayers
        })
    } 

    handleSubmit(){
        let name=this.state.playerName
        let number=parseInt(this.state.playerNumber,10)
        let position=this.state.playerPosition
        PlayersAPI.addNewPlayer(number,name,position)
        document.querySelector('.adding-form').style.display='none'
        this.setState({
            players: PlayerAPI.all()
        })

    }

    change(e) {
        let player = {}
        let name = e.target.name
        player[name]=e.target.value
        this.setState(player)
    }

    addPlayerForm(e){
        if(e.target.name==='showPlayerForm'){
            return e.target.nextSibling.style.display='flex'
        } else{
           return e.target.nextSibling.style.display='none'
        } 
    }

    render(){
        // console.log(this.state)
        return(
            <div>
                <button type="button" name="showPlayerForm" className="add-button" onClick={this.addPlayerForm}>Add player</button>
                <form name="playerForm" className="adding-form" style={{display: 'none'}}>
                    <input type="text" name="playerNumber" placeholder= {`Set player number`} onChange={this.change}/>
                    <input type="text" name="playerName" placeholder="Player name" onChange={this.change}/>
                    <input type="text" name="playerPosition" placeholder="Player position" onChange={this.change}/>
                    <input type="button" value="Confirm" name="button" onClick={this.handleSubmit.bind(this)}/>
                </form>
                <ul className="container">
                    {
                        this.state.players.map(p =>(
                            
                            <li key ={p.name} className="player-card">
                                <Link to={`/players/${p.number}`}>{p.name}</Link>
                                <a id={p.id} href="#" className="delete" onClick={this.delete}>Delete</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default FullPlayers;