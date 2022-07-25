//Random Numbers
var random = [0,1,2,3,4,5,6,7];
random = random.sort(function() {return Math.random() - 0.5});
//Creating groups Playoff
function groupA(teams){
    let groupA = [];
    for (var i = 0 ; i < 2 ; i++){   
            groupA.push(teams[random[i]])      
    }
    return groupA; 
    
}
function groupB(teams){
    let groupB = [];
    for (var i = 2 ; i < 4 ; i++){   
            groupB.push(teams[random[i]])       
        
    }
    return groupB; 
    
}
function groupC(teams){
    let groupC = [];
    for (var i = 4 ; i <= 5 ; i++){   
            groupC.push(teams[random[i]])       
        
    }
    return groupC; 
    
}
function groupD(teams){
    let groupD = [];
    for (var i = 6 ; i <= 7 ; i++){   
            groupD.push(teams[random[i]])       
        
    }
    return groupD; 
    
}


//Creating 8 teams
class Teams {
    constructor(name){
        this.name = name;
        this.players = 11;
    }
}
const NameTeam = [];
NameTeam.push("Italy");
NameTeam.push("Russia");
NameTeam.push("Spain");
NameTeam.push("Austria");
NameTeam.push("England");
NameTeam.push("Finland");
NameTeam.push("Ukraine");
NameTeam.push("Iceland");
const NameTeams = new Teams(NameTeam);

/* console.log(NameTeams.name); */
var groupA = groupA(NameTeams.name);
var groupB = groupB(NameTeams.name);
var groupC = groupC(NameTeams.name);
var groupD = groupD(NameTeams.name);
console.log(groupA);
console.log(groupB);
console.log(groupC);
console.log(groupD);

