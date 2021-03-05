class Player {
    constructor() {
    }

    getPlayerCountFromDb() {
        var playerCountRef = database.ref('game/playerCount');
        playerCountRef.on("value", function (data) {
            playerCount = data.val();
        })
    }

    updatePlayerCountInDb(count) {
        database.ref('game').update({
            playerCount: count
        });
    }

    update(name) {
        var playerIndex = "game/player" + playerCount;//playerCount is a global variable in sketch.js
        database.ref(playerIndex).set({
            name: name
        });
    }
}