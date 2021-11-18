import { useEffect } from 'react';
import styles from '../styles/components/path.module.css';

export function Path(value, status){

  useEffect(() => {
    moveProgressBar()
  }, [value])

  function moveProgressBar(){
    styles.traject.concat(`width: ${100}% !important;`)  
  }

  function chooseIcon(){
    if(status === "waitingForTransport"){
      //Aguardando transporte
      return <img className={styles.loadingTruck} src="loading-truck.svg" alt="CarregandoCaminhão" />
    }else if(value > 5){
      //Em transporte
      return <div className={styles.square}></div>
    }
  }

  return(
    <div className={styles.container}>
      {chooseIcon()}
      <div className={styles.backPath}></div>
      { true && (
        <div className={styles.traject}>
          <div className={styles.pathInProgress}></div>
          <img className={styles.truck} src="truck.svg" alt="Caminhão" />
        </div>
      )}
      <img  className={styles.flag} src="flag.svg" alt="Bandeira" />
    </div>
  )
}