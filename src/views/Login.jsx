import * as React from 'react';
import LoginUI from "../components/LoginUI";

import styles from "../styles/login.module.css";

export default function Login() {

  return (
    <>
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

        <LoginUI />
      </div>
    </div>
  </>);
}
