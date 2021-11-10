import * as React from "react";
import Button from "@material-ui/core/Button";
import { Email } from "@material-ui/icons";

import styles from "../styles/login.module.css";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();

  function handlerLoginWithEmail() {
    //Codigo login com email no firebase
    history.push("home");
  }

  function handlerLoginWithGoogle() {
    //Codigo login com email no firebase
    history.push("home");
  }

  return (<>
    <head>
      <title>Pack Delivery</title>
    </head>

    <div className={styles.container}>
      <div className={styles.sideLeft}>
        <div className={styles.contentLogo}>
          <img src="pack.png" width="200px" alt="Pacote" />
          <h1>NOME</h1>
        </div>

        <img className={styles.bars} src="bars.svg" alt="/" />
      </div>

      <div className={styles.sideRight}>
        <p>Breve descrição...</p>

        <div className={styles.buttons}>
          <Button
            variant="contained"
            startIcon={<Email />}
            onClick={handlerLoginWithEmail}
          >
            Entrar com E-mail
          </Button>

          <Button
            variant="contained"
            startIcon={<img src="google.svg" height="16px" alt="G" />}
            onClick={handlerLoginWithGoogle}
          >
            Entrar com Google
          </Button>
        </div>
      </div>
    </div>
  </>);
}
