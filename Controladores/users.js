import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";

export async function createUser(name, email, password){
    const usersCollection = collection(db, "users");
    const data = {name, email, password}
    await addDoc(usersCollection, {data})
}