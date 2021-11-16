import styles from '../styles/components/path.module.css';

export function Path(value, status){
  return(
    <div className={styles.container}>
      { true ? (
        //Em transporte
        <div className={styles.square} disabled ></div>
      ) : (
        //Aguardando transporte
        <img className={styles.loadingTruck} src="loading-truck.svg" alt="CarregandoCaminhão" />
      )}
      <div className={styles.backPath}></div>
      <div>
        {/* <div className={styles.pathInProgress}></div> */}
        <img className={styles.truck} src="truck.svg" alt="Caminhão" />
      </div>
      <img  className={styles.flag} src="flag.svg" alt="Bandeira" />
    </div>
  )
}