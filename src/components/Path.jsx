import { useEffect, useState } from "react";
import styles from "../styles/components/path.module.css";

//Imagens
import truckImg from "../res/truck.svg";
import loadingTruckImg from "../res/loading-truck.svg";
import flagImg from "../res/flag.svg";

//Componente de trajeto
export function Path({ value, status }) {

  function chooseIcon() {
    if (status === "waitingForTransport") {
      //Aguardando transporte
      return (
        <img
          className={styles.loadingTruck}
          src={loadingTruckImg}
          alt="CarregandoCaminhão"
        />
      );
    } else if (value > 5) {
      //Em transporte
      return <div className={styles.square}></div>;
    }
  }

  return (
    <div className={styles.container}>
      {chooseIcon()}
      <div className={styles.backPath}></div>
      {true && (
        <div className={styles.traject} style={{ width: `${value}%`, }}>
          <div className={styles.pathInProgress}></div>
          <img className={styles.truck} src={truckImg} alt="Caminhão" />
        </div>
      )}
      <img className={styles.flag} src={flagImg} alt="Bandeira" />
    </div>
  );
}
