//Creando numeros aleatorios de 0-7 para no repetir el numero.
var random = [0,1,2,3,4,5,6,7];
random = random.sort(function() {return Math.random() - 0.5});
//Creando groups Playoff
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
// Funcion que juega en cuartos de Finales
function play(groupA,groupB,groupC,groupD){
    const win = true
    const lost = false
    let subchamp = 1
    let winchamp = 0

    let groups = [];
    groups.push(groupA);
    groups.push(groupB);
    groups.push(groupC);
    groups.push(groupD);

    for (let i=0 ; i < 2 ; i++){
        if 
    }

    return groups[3][1];
}

/* console.log de la fase de grupos*/
var groupA = groupA(NameTeams.name);
var groupB = groupB(NameTeams.name);
var groupC = groupC(NameTeams.name);
var groupD = groupD(NameTeams.name);
console.log("==================================================\n== EMPIEZAN LAS FASES ELIMIANTORIAS DEL TORENEO ==\n==================================================\n")
console.log("Equipos que paticipan en la Playoff:\n")
console.log(`GRUPO A: ${groupA[0]}, ${groupA[1]}`);
console.log(`GRUPO B: ${groupB[0]}, ${groupB[1]}`);
console.log(`GRUPO C: ${groupC[0]}, ${groupC[1]}`);
console.log(`GRUPO D: ${groupD[0]}, ${groupD[1]}\n`);
console.log(play(groupA,groupB,groupC,groupD));

