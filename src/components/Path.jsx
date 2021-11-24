import { useEffect, useState } from "react";
import styles from "../styles/components/path.module.css";

//Imagens
import truckImg from "../../public/truck.svg";
import loadingTruckImg from "../../public/loading-truck.svg";
import flagImg from "../../public/flag.svg";

export function Path(value, status) {
  const [valueBar, setValueBar] = useState();

  useEffect(() => {
    moveProgressBar();
  }, [moveProgressBar]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function moveProgressBar() {
    setValueBar(`width: ${value}% !important;`);
  }

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
        <div className={styles.traject}>
          <div className={styles.pathInProgress}></div>
          <img className={styles.truck} src={truckImg} alt="Caminhão" />
        </div>
      )}
      <img className={styles.flag} src={flagImg} alt="Bandeira" />
    </div>
  );
}
