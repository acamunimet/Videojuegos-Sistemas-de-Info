import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export async function createClub(nombre, descripcion, videojuegos){
    const clubCollection = collection(db, "clubs");
    const data = {nombre, descripcion, videojuegos}
    await addDoc(clubCollection, {data})
}

export async function getClubs(){
    const clubCollection = collection(db,"clubs");
    const clubsSnapshot = await getDocs(clubCollection);            /* Devuelve la coleccion de clubes */
    const clubs = clubsSnapshot.docs.map((doc) => doc.data());
}