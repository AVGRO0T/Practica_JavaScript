//Creando numeros aleatorios de 0-7 para no repetir el numero.
var random = [0,1,2,3,4,5,6,7];
random = random.sort(function() {return Math.random() - 0.5});

// creando numeros aleatoereos para los goles
function goalsRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
//Creando grupos Playoff
function groupA(teams){
    this.teams = teams;
    let groupA = []
    for (var i = 0 ; i < 2 ; i++){   
        groupA.push(teams[random[i]].name);
        teams[random[i]].position = "A"
    }
    return groupA; 
    
}
function groupB(teams){
    this.teams = teams;
    let groupB = []
    for (var i = 2 ; i < 4 ; i++){   
        groupB.push(teams[random[i]].name);
        teams[random[i]].position = "B"
    }
    return groupB; 
    
}
function groupC(teams){
    this.teams = teams;
    let groupC= []
    for (var i = 4 ; i < 6 ; i++){   
        groupC.push(teams[random[i]].name);
        teams[random[i]].position = "C"
    }
    return groupC; 
    
}
function groupD(teams){
    this.teams = teams;
    let groupD = []
    for (var i = 6  ; i < 8 ; i++){   
        groupD.push(teams[random[i]].name);
        teams[random[i]].position = "D"
    }
    return groupD; 
    
}


//Creating 8 teams
class Teams {
    constructor(name, goals, position, group, state){
        this.name = name;
        this.players = 11;
        this.goals = goals;
        this.position = position;
        this.group = group;
        this.state = state;
    }
    consutar(){
        return console.log = (this.name);
    }
}

//Creando los jugadores
const TeamsArr = [new Teams("Italy"),new Teams("Russia"),new Teams("Spain"),new Teams("Austria"),new Teams("England"),new Teams("Finland"), new Teams("Ukraine"), new Teams("Iceland")];

// Funcion que juega en cuartos de Finales
 function Playoff(TeamsArr, A, B){

    TeamsArr.forEach(teams => {
        teams.goals = goalsRandom(0,5);
            
          
        })

        for (let i = 0 ; i < 8 ; i++){
                if (A[0] === TeamsArr[i].name){
                  for (let j = 0 ; j <8 ; j++ ){
                    if (B[1] === TeamsArr[j].name){
                        if (TeamsArr[i].goals < TeamsArr[j].goals){
                            TeamsArr[i].state = "Eliminado";
                            TeamsArr[j].state = "Para cuartos";
                            console.log (`${TeamsArr[j].name} gana`)
                        } else if  (TeamsArr[i].goals > TeamsArr[j].goals){
                            TeamsArr[j].state = "Eliminado";
                            TeamsArr[i].state = "Para cuartos";
                            console.log (`${TeamsArr[i].name} gana`)
                        }
                    }
                  }  
                }
        }

return 0;
}

/* console.log de la fase de grupos*/
var groupA = groupA(TeamsArr);
var groupB = groupB(TeamsArr);
var groupC = groupC(TeamsArr);
var groupD = groupD(TeamsArr);
console.log("==================================================\n== EMPIEZAN LAS FASES ELIMIANTORIAS DEL TORENEO ==\n==================================================\n")
console.log("Equipos que paticipan en la Playoff:\n")
console.log(`GRUPO A: ${groupA[0]}, ${groupA[1]}`);
console.log(`GRUPO B: ${groupB[0]}, ${groupB[1]}`);
console.log(`GRUPO C: ${groupC[0]}, ${groupC[1]}`);
console.log(`GRUPO D: ${groupD[0]}, ${groupD[1]}\n`);

console.log("==================CUARTOS DE FINAL============\n")
console.log(Playoff(TeamsArr, groupA, groupB, groupC, groupD))
console.log(TeamsArr)

