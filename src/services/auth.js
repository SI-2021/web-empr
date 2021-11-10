import app from "./app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail,
    EmailAuthProvider
} from "firebase/auth";
import * as firebaseui from "firebaseui";

import { get, child, set, ref } from "firebase/database";
import db from "./database";



const auth = getAuth(app);
const ui = firebaseui.auth.AuthUI(app.auth())

const login = async (login, senha) => {
    console.log(auth)
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
          }
        ]
      });
}

const cadastrar = async ({ nome, login, email, senha } = {}) => {
    let userExistente = null;
    try {
        userExistente = await get(child(ref(db), `users/${login}`)).then(response => response.val() ? true : false);
    } catch (error) {
        alert("Ops! " + error);
        return;
    }

    if (userExistente) { alert("Login ou e-mail já cadastrado"); return; }

    let user = await createUserWithEmailAndPassword(auth, email, senha)
        .then(async response => {
            await set(ref(db, `users/${login}`), {
                nome,
                email
            });
            return response.user
        })
        .catch(error => {
            console.log("cadastrar [erro]: " + JSON.stringify(error))
            return null
        });

    if (!user) return null;

    await updateProfile(user, { displayName: nome });
    await sendEmailVerification(user)

    return { login, nome };
}

const recuperarSenha = async email => {
    return await sendPasswordResetEmail(auth, email)
        .then(() => true)
        .catch(error => false);
}

export { login, cadastrar, recuperarSenha }