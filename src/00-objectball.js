const gameObject = () => {
    return {
        home : {
            teamName : "Brooklyn Nets",
            colors : ["Black", "White"],
            players : {
                "Alan Anderson" : {         
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,
                },
                "Reggie Evans" : {        
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks : 7,
                },
                "Brook Lopez" : {           
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 15,
                },
                "Mason Plumlee" : {   
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6,
                    steals : 3,
                    blocks : 8,
                    slamDunks : 5,
                },
                "Jason Terry" : {            
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    slamDunks : 1,
                },
            },
        },
        away : {
            teamName : "Charlotte Hornets",
            colors : ["Turquoise", "Purple"],
            players : {
                "Jeff Adrien" : {         
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2,
                },
                "Bismak Biyombo" : {        
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10,
                },
                "DeSagna Diop" : {           
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5,
                    slamDunks : 5,
                },
                "Ben Gordon" : {   
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2,
                    steals : 1,
                    blocks : 1,
                    slamDunks : 0,
                },
                "Brendan Haywood" : {            
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    slamDunks : 12,
                },
            },
            
        },
    }
}


function numPointsScored (name) {
    let object = gameObject()
    for (const key in object.away.players) {
        if (key === name) {
            console.log(`Found player in away object: ${key}`)
            return object.away.players[name].points
        }
    }

    for (const key in object.home.players) {
        if (key === name) {
            console.log(`Found player in home object: ${key}`)
            return object.home.players[name].points
        }
    }

    return `Player not found`
}


function shoeSize (name) {
    let object = gameObject()
    for (const key in object.away.players) {
        if (key === name) {
            console.log(`Found player in away object: ${key},\nShoe size: ${object.away.players[name].shoe}`)
            return object.away.players[name].shoe
        }
    }

    for (const key in object.home.players) {
        if (key === name) {
            console.log(`Found player in home object: ${key},\nShoe Size: ${object.home.players[name].shoe}`)
            return object.home.players[name].shoe
        }
    }

    return `Player not found`
}

shoeSize("Brendan Haywood")

function teamColors (teamParName) {
    let object = gameObject()

    if (object.away.teamName === teamParName) {
        return object.away.colors
    } else if (object.home.teamName === teamParName) {
        return object.home.colors
    }
    return `Team not found in the league`
}

function teamNames () {
    let object = gameObject()
    let teams = [object.away.teamName, object.home.teamName]
    console.log(`The teams are ${teams[0]} and ${teams[1]}`)

    // Alternative way below but couldn't debug, Start by initializing teams as an empty array
    // for (const key in object.home ) {
    //     teams.push(object.home.teamName)
    // }
    // for (const key in object.away) {
    //     teams.push(object.away.teamName)
    // }
    return teams
}

console.log(teamNames())
