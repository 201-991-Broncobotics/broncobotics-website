import { app } from "./clientApp";
import { getFirestore } from "firebase/firestore";

let db = getFirestore(app);

export { db };
