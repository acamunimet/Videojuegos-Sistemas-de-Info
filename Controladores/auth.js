import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../Firebase"

export async function loginWithCredentials(email, password) {
    try {
        const user  = await signInWithEmailAndPassword(auth, email, password);      /* Login email y contraseña */
        return user
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function registerWithCredentials(email, password) {
    try {
        console.log(email, password);
        const user = await createUserWithEmailAndPassword(auth, email, password);       /* Register email y contraseña */
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function logOut() {
    await signOut(auth);                                                                /* Cerrar sesión */
    console.log("Sesión cerrada.");
}