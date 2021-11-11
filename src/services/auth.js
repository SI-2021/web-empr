import app from "./app";
import {
    initializeAuth
} from "firebase/auth";

const auth = initializeAuth(app);

export default auth;