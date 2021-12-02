import { useHistory } from "react-router-dom";

import { Path } from "../components/Path";
import { Status } from "../components/Status";

//Estilos
import styles from "../styles/components/delivery.module.css";

export function Delivery({ id, name, status, timeLeft, totalTime, course }) {
  const history = useHistory();
  return (
    <>
      <div
        className={styles.box}
        onClick={() => history.push(`entregas/${id}`)}
      >
        <header>
          <h1>{name}</h1>
          <Status state={status} />
        </header>
        {(status === "onCarriage" || status === "waitingForTransport") && (
          <>
            <main>
              <div>
                <p>Em curso {course}</p>
                <p>{timeLeft} min restante</p>
              </div>
            </main>
            <footer>
              <Path value={Math.floor(((totalTime - timeLeft) / totalTime) * 100)} status={status} />
            </footer>
          </>
        )}
        {status === "lookingForDelivery" && (
          <>
            <footer>
              <p>
                Estamos procurando o melhor entregador para levar seu pacote.
              </p>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
