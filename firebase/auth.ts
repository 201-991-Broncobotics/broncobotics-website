import { app } from "./clientApp";
import { getAuth } from "firebase/auth";

let auth = getAuth(app);

export { auth };
