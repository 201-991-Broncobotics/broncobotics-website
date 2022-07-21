import { app } from "./clientApp";
import { getStorage } from "firebase/storage";

let storage = getStorage(app);

export { storage };
