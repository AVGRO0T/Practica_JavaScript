//Creando numeros aleatorios de 0-7 para no repetir el numero.
var random = [0,1,2,3,4,5,6,7];
random = random.sort(function() {return Math.random() - 0.5});

// creando numeros aleatoereos para los goles
function goalsRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
//Creando grupos Playoff
function groupA(One, Two, Three, Four, Five, Six, Seven, Eight){
    teams = [One, Two, Three, Four, Five, Six, Seven, Eight]
    let groupA = [];
    for (var i = 0 ; i < 2 ; i++){   
            groupA.push(teams[random[i]])      
    }
    return groupA; 
    
}
function groupB(One, Two, Three, Four, Five, Six, Seven, Eight){
    teams = [One, Two, Three, Four, Five, Six, Seven, Eight]
    let groupB = [];
    for (var i = 2 ; i < 4 ; i++){   
            groupB.push(teams[random[i]])       
        
    }
    return groupB; 
    
}
function groupC(One, Two, Three, Four, Five, Six, Seven, Eight){
    teams = [One, Two, Three, Four, Five, Six, Seven, Eight]
    let groupC = [];
    for (var i = 4 ; i <= 5 ; i++){   
            groupC.push(teams[random[i]])       
        
    }
    return groupC; 
    
}
function groupD(One, Two, Three, Four, Five, Six, Seven, Eight){
    teams = [One, Two, Three, Four, Five, Six, Seven, Eight]
    let groupD = [];
    for (var i = 6 ; i <= 7 ; i++){   
            groupD.push(teams[random[i]])       
            
    }
    return groupD; 
    
}


//Creating 8 teams
class Teams {
    constructor(name, goals, position){
        this.name = name;
        this.players = 11;
        this.goals = goals;
        this.position = position;
    }
    consutar(){
        return console.log = (this.name);
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
/* function playoff {
    Italy.goals = goalsRandom(1,5);
    Russia.goals = goalsRandom(1,5);
    Spain.goals = goalsRandom(1,5);
    Austria.goals = goalsRandom(1,5);
    England.goals = goalsRandom(1,5);
    Finland.goals = goalsRandom(1,5);
    Ukraine.goals = goalsRandom(1,5);
    Iceland.goals = goalsRandom(1,5);
}
 */
/* console.log de la fase de grupos*/
var groupA = groupA(Italy.name,Russia.name, Spain.name, Austria.name, England.name, Finland.name, Ukraine.name, Iceland.name);
var groupB = groupB(Italy.name,Russia.name, Spain.name, Austria.name, England.name, Finland.name, Ukraine.name, Iceland.name);
var groupC = groupC(Italy.name,Russia.name, Spain.name, Austria.name, England.name, Finland.name, Ukraine.name, Iceland.name);
var groupD = groupD(Italy.name,Russia.name, Spain.name, Austria.name, England.name, Finland.name, Ukraine.name, Iceland.name);
console.log("==================================================\n== EMPIEZAN LAS FASES ELIMIANTORIAS DEL TORENEO ==\n==================================================\n")
console.log("Equipos que paticipan en la Playoff:\n")
console.log(`GRUPO A: ${groupA[0]}, ${groupA[1]}`);
console.log(`GRUPO B: ${groupB[0]}, ${groupB[1]}`);
console.log(`GRUPO C: ${groupC[0]}, ${groupC[1]}`);
console.log(`GRUPO D: ${groupD[0]}, ${groupD[1]}\n`);

let test = ["Italy"];
console.log(`${test}`.name)

