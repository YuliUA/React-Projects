const uuid = require('uuid');
const PlayersAPI = {
	players: [
		{ number: 7, name: 'Neymar', position: 'Center', id: uuid.v1()},
		{ number: 12, name: 'Messi', position: 'Forward', id: uuid.v1() },
		{ number: 8, name: 'Cr.Ronaldo', position: 'Forward' , id:uuid.v1() },
		{ number: 1, name: 'Casillias', position: 'Goalkeeper',  id: uuid.v1() }
	],
	
	all: function() {
		return this.players;
	},
	get: function(id) {
		return this.players.filter((p) => p.number === id)[0];
	},
	addNewPlayer: function(number, name, position) {
		this.players.push({
			number: number,
			name: name,
			position: position,
			id: uuid.v1()
		});
		console.log(PlayersAPI.players);

	},
	deleteHandle: function(id) {
		let index = this.players.findIndex(i=>i.id===id)
		this.players.splice(index,1)
		console.log('after', this.players)
	}
};
export default PlayersAPI;
