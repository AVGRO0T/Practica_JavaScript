//Creando numeros aleatorios de 0-7 para no repetir el numero.
var random = [0,1,2,3,4,5,6,7];
random = random.sort(function() {return Math.random() - 0.5});
//Creando grupos Playoff
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
    constructor(name, goals){
        this.name = name;
        this.players = 11;
        this.goals = goals;
    }
    playofff(){
        
    }
}
//Creando los jugadores
const Italy = new Teams("Italy") ;
const Russia = new Teams("Russia") ;
const Spain = new Teams("Spain") ;
const Austria = new Teams("Austria") ;
const England = new Teams("England") ;
const Finland = new Teams("Finland") ;
const Ukraine = new Teams("Ukraine") ;
const Iceland = new Teams("Iceland") ;
// Poniendo todos los jugadores en un array para repartir en equipos
let NameTeams = [Italy.name, Russia.name, Spain.name, Austria.name, England.name, Finland.name, Ukraine.name, Iceland.name]
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

   /* if groups[0][0] == groups  */

    return groups[3][1];
}

/* console.log de la fase de grupos*/
var groupA = groupA(NameTeams);
var groupB = groupB(NameTeams);
var groupC = groupC(NameTeams);
var groupD = groupD(NameTeams);
console.log("==================================================\n== EMPIEZAN LAS FASES ELIMIANTORIAS DEL TORENEO ==\n==================================================\n")
console.log("Equipos que paticipan en la Playoff:\n")
console.log(`GRUPO A: ${groupA[0]}, ${groupA[1]}`);
console.log(`GRUPO B: ${groupB[0]}, ${groupB[1]}`);
console.log(`GRUPO C: ${groupC[0]}, ${groupC[1]}`);
console.log(`GRUPO D: ${groupD[0]}, ${groupD[1]}\n`);
console.log(play(groupA,groupB,groupC,groupD));

