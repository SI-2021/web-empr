import { useHistory } from "react-router";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { auth } from "../services/auth";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

import db from "../services/database";
import { ref, set, child, get } from "firebase/database";

import "../styles/components/loginButton.css";

export default function Logar() {
  const history = useHistory();

  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult) {
        // Tenta achar o usuário no banco
        get(child(ref(db), `/Pessoa/${authResult.user.uid}`)).then(
          async (response) => {
            const data = response.val();

            let user = {
              nome_completo: authResult.user.displayName,
              email: authResult.user.email
            };

            // Se não achou o usuário, cadastra
            if (!data) {
              await set(ref(db, `/Pessoa/${authResult.user.uid}`), user);
            } else {
              user = data;
            }

            history.push("/home", { user });
          }
        );

        return false;
      }
    },
    signInFlow: "popup",
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID
    ]
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
}
