import { getFirestore } from "firebase/firestore/lite";
import { app } from "./clientApp";

let liteDb = getFirestore(app);

export { liteDb };
