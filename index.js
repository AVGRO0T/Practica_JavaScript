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

console.log(NameTeams.name);