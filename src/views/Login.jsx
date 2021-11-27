import * as React from "react";

//Componentes
import LoginUI from "../components/LoginUI";

//Imagens

//Estilos
import styles from "../styles/login.module.css";

//Pagina de login
export default function Login() {
  return (
    <>
      <head>
        <title>Pack Delivery</title>
      </head>

      <div className={styles.container}>
        <div className={styles.sideLeft}>
          <div className={styles.contentLogo}>
            <img src='/public/pack.png' width="200px" alt="Pacote" />
            <h1>NOME</h1>
          </div>

          <img className={styles.bars} src="bars.svg" alt="/" />
        </div>

        <div className={styles.sideRight}>
          <p>Breve descrição...</p>

          <LoginUI />
        </div>
      </div>
    </>
  );
}
