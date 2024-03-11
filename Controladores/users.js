import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function createUser(name, lastName, email, password){
    const userCollection = collection(db, "users");
    const data = {name, lastName, email, password}
    await addDoc(userCollection, {data})
}