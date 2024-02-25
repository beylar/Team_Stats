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

console.log(team);