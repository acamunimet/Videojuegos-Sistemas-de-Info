class Club {

    description = "Sin descripción.";
    gameList = [];

    constructor(clubName){
        this.name = clubName;
    }

    /* GETTERS */

    getName(){
        return this.name;
    }

    getGameList(){
        return this.gameList;
    }

    /* SETTERS */

    setDesc(description){
        this.description = description;
    }

    setGameList(gamesList){
        this.gameList = gamesList;
    }

    setID(clubID){
        this.id = clubID;
    }

    /* MÉTODOS */
    addGame(game){
        this.gameList.push(game);
    }
}