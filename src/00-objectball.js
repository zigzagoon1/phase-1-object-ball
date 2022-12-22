function gameObject() {
    const gameObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12, 
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12, 
                    steals: 12, 
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11, 
                    shoe: 17, 
                    points: 17, 
                    rebounds: 19,
                    assists: 10, 
                    steals: 3, 
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19, 
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8, 
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31, 
                    shoe: 15, 
                    points: 19, 
                    rebounds: 2, 
                    assists: 2, 
                    steals: 4, 
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Horns",
            colors: "Turquoise, purple",
            players: {
                "Jeff Adrien": {
                    number: 4, 
                    shoe: 18, 
                    points: 10, 
                    rebounds: 1,
                    assists: 1, 
                    steals: 2,
                    blocks: 7, 
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0, 
                    shoe: 16, 
                    points: 12, 
                    rebounds: 4, 
                    assists: 7, 
                    steals: 7, 
                    blocks: 15, 
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14, 
                    points: 24,
                    rebounds: 12, 
                    assists: 12, 
                    steals: 4, 
                    blocks: 5, 
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8, 
                    shoe: 15, 
                    points: 33, 
                    rebounds: 3, 
                    assists: 2, 
                    steals: 1, 
                    blocks: 1, 
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33, 
                    shoe: 15, 
                    points: 6, 
                    rebounds: 12, 
                    assists: 12, 
                    steals: 22, 
                    blocks: 5, 
                    slamDunks: 12
                }
            }
        }
    }
    return gameObject;
}
const game = gameObject();

function numPointsScored(player) {
    for (let gameKey in game) {
        let playerKey = game[gameKey].players;
        for (let member in playerKey) {
            if (member === player) {
                return game[gameKey].players[member].points;
            }
        }
    }
    console.log("didn't match player");
    return undefined;
}
//numPointsScored("Brendan Haywood");


function shoeSize(player) {
    for (const gameKey in game) {
        let playerKey = game[gameKey].players;
        for (let member in playerKey) {
            if (member === player) {
                console.log(game[gameKey].players[member].shoe);
                return game[gameKey].players[member].shoe;
            }
        }
    }
    return undefined;
}
//shoeSize("Mason Plumlee");

function teamColors(team) {
    for (let gameKey in game) {
        let teamKey = game[gameKey].teamName;
        if (teamKey === team) {
            console.log(game[gameKey].colors);
            debugger;
            return game[gameKey].colors;
        }
    }
    return undefined;
}
//teamColors("Charlotte Horns");

function teamNames() {
    const names = [];
    for (const gameKey in game) {
        console.log(game[gameKey].teamName);
        names.push(game[gameKey].teamName);
    }
    console.log(names);
    return names;
}

//teamNames();

function playerNumbers(team) {
    //return array of the jersey numbers for given team
    const playerNums = [];
    for (const gameKey in game) {
        if (game[gameKey].teamName === team) {
            const players = game[gameKey].players;
            for (const player in players){
                playerNums.push(game[gameKey].players[player].number);
            }
        }
    }
    console.log(playerNums);
    return playerNums;
}
//playerNumbers("Brooklyn Nets");

function playerStats(player) {
    //return object of all of given player's stats
    for (const gameKey in game) {
        const players = game[gameKey].players;
        for (const playerKey in players){
            if (playerKey === player) {
                console.log(game[gameKey].players[playerKey]);
                return game[gameKey].players[playerKey];
            }
        }
    }
}
//playerStats("Reggie Evans");

function bigShoeRebounds() {
    //return number of rebounds associated with player with largest shoe size
    //step 1: find player with largest shoe size. 
    //step 2: return that players number of rebounds
    let biggestShoe = 0;
    let biggestShoePlayer = "";
    for (const gameKey in game) {
        const players = game[gameKey].players;
        for (const player in players) {
            if (game[gameKey].players[player].shoe > biggestShoe) {
                biggestShoe = game[gameKey].players[player].shoe;
                biggestShoePlayer = player;
            }
        }
        return game[gameKey].players[biggestShoePlayer].rebounds;
    }    
}
//bigShoeRebounds();
function mostPointsScored() {
    //which player has scored the most points? 
    let playerWithMostPoints = "";
    let mostPoints = 0;
    for (const gameKey in game) {
        const players = game[gameKey].players;
        for (const player in players) {
            if (game[gameKey].players[player].points > mostPoints) {
                mostPoints = game[gameKey].players[player].points;
                playerWithMostPoints = player;
            }
        }
    }
    console.log(playerWithMostPoints);
    return playerWithMostPoints;
}
//mostPointsScored();

function winningTeam() {
    //which team has scored the most points? 
    //use reduce...
    let accumulator = 0;
    let secondAccumulator = 0;
    for (const gameKey in game) {
        const playersObj = game[gameKey].players;
        for (const player in playersObj) {
            if (gameKey === "home") {
                debugger;
            accumulator += game[gameKey].players[player].points;
            }
            else {
                debugger;
                secondAccumulator += game[gameKey].players[player].points;
            }
    }
}
return accumulator > secondAccumulator ? accumulator : secondAccumulator;
}
//winningTeam();

function playerWithLongestName() {
    //which player has longest name
    let longestName = "";
    for (const gameKey in game) {
        const players = game[gameKey].players;
        for (const player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
            else {
                continue;
            }
        }
    }
    return longestName;
}
//playerWithLongestName();

function doesLongNameStealATon() {
    //return true if player with longest name has the most steals
    const longestName = playerWithLongestName();
    let longestNameSteals = 0;
    let otherSteals = 0;
    for (const gameKey in game) {
        const players = game[gameKey].players;
        for (const player in players) {
            console.log(player);
            if (player === longestName) {
                longestNameSteals = game[gameKey].players[player].steals;
                console.log("longest name steals " + longestNameSteals);
            }
            else {
                if (game[gameKey].players[player].steals > otherSteals) {
                    otherSteals = game[gameKey].players[player].steals;
                    console.log("other steals: " + otherSteals);
                }
            }
        }
    }
    if (longestNameSteals > otherSteals) {
        console.log("true");
        return true;
    }
    console.log("false");
    return false;
}
doesLongNameStealATon();
