var gameState;
class GameState{
    constructor(){
        
    }


    getGameState(){
     var gameStateFromDatabase=db.ref("game/gameState");
     console.log(JSON.stringify(gameStateFromDatabase));
     gameStateFromDatabase.on("value", this.readState);
    }

    readState(data){
        gameState=data.val();
    }
    update(state) {
        database.ref('game/').update({
            gameState: state
        });
    }
    
    start() {
        if (gameState === 0) {
            player = new Player();
            player.getPlayerCountFromDb();
            form = new Form()
            form.display();
        }
    }

}

