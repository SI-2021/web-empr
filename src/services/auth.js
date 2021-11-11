import app from "./app";
import {
    initializeAuth
} from "firebase/auth";

export const auth = initializeAuth(app);

