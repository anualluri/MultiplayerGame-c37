class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
       console.log("˚¬˚"+gameState)
    })
   
  }
  

  play(){
    text("~Ze Game Has Begun!~", 120,120);
    Player.getAllPlayerInfo;
    if(playerInfo!=undefined){
      console.log("it is wrking")
        for(var i in playerInfo){
          text(playerInfo[i].name, 120, 120);
        }
    }
    
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      player = new Player();
      //player.getCount();
      // form = new Form()
      // form.display();
      var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
    }
    console.log("start"+gameState)
  }
}
