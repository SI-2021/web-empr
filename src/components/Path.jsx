import styles from "../styles/components/path.module.css";

//Imagens
import truckImg from "../res/truck.svg";
import loadingTruckImg from "../res/loading-truck.svg";
import grayFlagImg from "../res/grayFlag.svg";
import greenFlagImg from "../res/greenFlag.svg";
import blackFlagImg from "../res/flag.svg";

//Componente de trajeto
export function Path({ value, status }) {

  return (
    <div className={styles.container}>
      {status === "waitingForTransport" ? (
        <img
          className={styles.loadingTruck}
          src={loadingTruckImg}
          alt="CarregandoCaminhão"
        />
      ) : (
        value > 5 && <div className={styles.square}></div>
      )}
      <div className={styles.backPath}></div>
      {status === "onCarriage" && (
        <div className={styles.traject} style={{ width: `${value}%`, }}>
          <div className={styles.pathInProgress}></div>
          {(status === "onCarriage" && value < 100) && <img className={styles.truck} src={truckImg} alt="Caminhão" />}
        </div>
      )}
      {status === "waitingForTransport" ? <img className={styles.flag} src={blackFlagImg} alt="Bandeira" />
        : (status === "onCarriage" && value < 100) ? <img className={styles.flag} src={grayFlagImg} alt="Bandeira" />
          : value === 100 && <img className={styles.flag} src={greenFlagImg} alt="Bandeira" />
      }
    </div>
  );
}
