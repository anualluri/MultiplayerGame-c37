class Player {
  constructor(){
    this.name=null;
    this.distance=0;
    this.index=null;
  }

  static getAllPlayerInfo(){
    playerInfo = database.ref('players');
    playerInfo.on("value",function(data){
      playerInfo = data.val();
      console.log("it is wrking3345")
})
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
})
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count

    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
   database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
    });
  }
}
