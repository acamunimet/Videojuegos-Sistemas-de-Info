import { collection, addDoc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function createGame(titulo, genero, descripcion){
    const gameCollection = collection(db, "games");
    const data = {titulo, genero, descripcion}                      /* Crear juego */
    await addDoc(gameCollection, {data})                            /* Función para pruebas */
}

export async function getGames(){
    const gameCollection = collection(db,"games");
    const gameSnapshot = await getDocs(gameCollection);             /* Devuelve la coleccion de juegos */
    const games = gameSnapshot.docs.map((doc) => doc.data());
    return games;
}

export async function getGamebyName(gameName){
    const gameCollection = collection(db,"games");
    const gameDoc = await getDoc(gameCollection, gameName);         /* Devuelve un juego insertándole el nombre */
    const game = gameDoc.data();                                    /* Esta función va para el buscador de juegos */
    return game;
}

