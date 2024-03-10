class Videogame {

    genre = 'Sin género.';
    description = 'Sin descripción.';

    constructor(gameTitle){
        this.title = gameTitle;
    }

    /* GETTERS */

    getGenre(){
        return this.genre;
    }

    getDescription(){
        return this.description;
    }

    /* SETTERS */

    setGenre(genre){
        this.genre = genre;
    }

    setDesc(description){
        this.description = description;
    }

    setID(gameID){
        this.id = gameID;
        /* Para juegos nuevos con id por definir, se le pasará por parámetro la longitud de la lista de videojuegos registrados +1*/
    }
}