const team = {};

//declaring properties in the team data structure
team._players = [];
team._games = [];

//Add value to the players array
team._players.push(
  { firstName: 'Pete', lastName: 'Wheeler', age: 54 },
  { firstName: 'Mike', lastName: 'Smith', age: 32 },
  { firstName: 'Sara', lastName: 'Johnson', age: 28 }
);

//Add value to the games array
team._games.push(
  { opponent: 'Raptors', teamPoints: 110, opponentPoints: 98 },
  { opponent: 'Lakers', teamPoints: 95, opponentPoints: 105 },
  { opponent: 'Warriors', teamPoints: 120, opponentPoints: 115 }
);

//console.log(team);

//players to retrieve the _players property.
team.players = function () {
    return this._players;
  };
  
//games to retrieve the _games property.
team.games = function () {
    return this._games;
  };
  
  console.log(team);
  
  team.addPlayer = function (newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    //add newPlayer object to the _players property
    this._players.push(newPlayer);
  };

  //calling the addPlayer function
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players());
  
  
  team.addGame = function (newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    //add newGame object to the _games property
    this._games.push(newGame);
  };
  
  //calling the addGame function
  team.addGame('Titans', 100, 98);
  console.log(team.games());


  
  