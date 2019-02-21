const PlayersAPI = {
	players: [
		{ number: 1, name: 'Neymar', position: 'Center' },
		{ number: 2, name: 'Messi', position: 'Forward' },
		{ number: 3, name: 'Cr.Ronaldo', position: 'Forward' },
		{ number: 4, name: 'Casillias', position: 'Goalkeeper' }
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
			position: position
		});
	},
	deleteHandle: function(e) {
		e.preventDefault();
		let name = e.target.parentElement.firstChild.innerText;
		let index = this.players.findIndex(i=>i.name===name)
		return this.players.splice(index,1);
		// console.log(PlayersAPI.players);
	}
};
export default PlayersAPI;
