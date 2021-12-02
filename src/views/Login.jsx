import * as React from "react";

//Componentes
import LoginUI from "../components/LoginUI";

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
            <img src='pack.svg' width="200px" alt="Pacote" />
            <h1>PACK</h1>
          </div>

          <img className={styles.bars} src="bars.svg" alt="/" />
        </div>

        <div className={styles.sideRight}>
          <p>Entregando seu pacote, com a honra que ele merece.</p>

          <LoginUI />
        </div>
      </div>
    </>
  );
}
