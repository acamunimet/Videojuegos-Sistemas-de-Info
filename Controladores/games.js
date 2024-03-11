import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export async function createGame(titulo, genero, descripcion){
    const gameCollection = collection(db, "games");
    const data = {titulo, genero, descripcion}
    await addDoc(gameCollection, {data})
}

export async function getGames(){
    const gameCollection = collection(db,"games");
    const gameSnapshot = await getDocs(gameCollection);             /* Devuelve la coleccion de juegos */
    const games = gameSnapshot.docs.map((doc) => doc.data());
}