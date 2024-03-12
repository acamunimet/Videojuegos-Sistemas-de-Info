import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function createUser(name, email){
    const usersCollection = collection(db, "users");
    const data = {name, email}
    await addDoc(usersCollection, data)
}