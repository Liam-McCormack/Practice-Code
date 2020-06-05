let team = {
    _players: [{
        firstName: 'Critiano',
        lastName: 'Ronaldo',
        age: 35
    },
    {
        firstName: 'Lionel',
        lastName: 'Messi',
        age: 32
    },
    {
        firstName: 'Paul',
        lastName: 'Scholes',
        age: 45
    }],
    _games: [{
        opponent: 'Real Madrid',
        teamPoints: 2,
        opponentPoints: 2
    },
    {
        opponent: 'Barcelona',
        teamPoints: 1,
        opponentPoints: 3
    },
    {
        opponent: 'Manchester United',
        teamPoints: 4,
        opponentPoints:3
    }],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        }
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this._games.push(game);
    }
}

//console.log(team.players); //logs the GET for _players
//console.log(team.games); //logs the GET for _games

// team.addPlayer('Marcus', 'Rashford', 22)
// team.addPlayer('Jadon', 'Sancho', 20)
// team.addPlayer('Paul', 'Pogba', 27); //Adds a new player to _players
// console.log(team.players); //New team players list

team.addGame('Manchester City', 2, 2);
team.addGame('PSG', 4, 1);
team.addGame('AC Milan', 1, 1);
console.log(team.games);