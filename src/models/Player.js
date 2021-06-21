class Player {
  constructor(player) {
    this.player = player;
  }
  getId(){
    return this.player.id;
  }
  getActive(){
    return this.player.active;
  }
  getName(){
    return this.player.name;
  }
  getAge(){
    return this.player.age;
  }
  getRole(){
    return this.player.role;
  }
  getTeam(){
    return this.player.team;
  }
  getGoals(){
    return this.player.goals;
  }
  getGames(){
    return this.player.games;
  }
  getLocation() {
    return this.player.location;
  }
  getRedCards() {
    return this.player.red_cards;
  }
  
  formatInfoForCard() {
    return {
      title: this.getName(),
      subtitle: this.getRole(),
      stats: [
        {
          label: "Team",
          value: this.getTeam(),
        },
        {
          label: "Location",
          value: this.getLocation(),
        },
        {
          label: "Age",
          value: this.getAge(),
        },
        {
          label: "Games",
          value: this.getGames(),
        },
        {
          label: "Goals",
          value: this.getGoals(),
        },
        {
          label: "Red Cards",
          value: this.getRedCards(),
        },
        
      ]
    }    
  }
}
export default Player;