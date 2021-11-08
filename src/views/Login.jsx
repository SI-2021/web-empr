
import styles from '../styles/login.module.css';


export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.sideLeft}>
        <div className={styles.contentLogo}>
          <img src="logo.svg" alt="Pacote"/>
          <h1>NOME</h1>
        </div>

        <img className={styles.bars} src="bars.svg" alt="/"/>
      </div>

      <div className={styles.sideRight}>
        <p>Breve descrição...</p>

        <div>
          <button>Entrar com E-mail</button>
          <button>Entrar com Google</button>
        </div>
      </div>
    </div>
  )
}