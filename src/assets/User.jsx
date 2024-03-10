class User{

    memberships = [];

    constructor(name, lastName, username, email, password){
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    /* GETTERS */

    getName(){
        return this.name;
    }

    getLastName(){
        return this.lastName;
    }

    getEmail(){
        return this.email;
    }

    /* SETTERS */

    setFavGame(game){
        this.favGame = game;
    }

    setMemberships(memberships){
        this.memberships = memberships;
    }

    /* MÉTODOS */
    
    addMembership(clubName){
        this.memberships.push(clubName);
    }
}