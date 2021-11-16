// import { Box } from "@material-ui/core";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HailIcon from "@mui/icons-material/Hail";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import styles from "../styles/components/delivery.module.css";
import { TryOutlined } from "@mui/icons-material";

export function Delivery({ name, status, timeLeft, course }) {
  function statusDelivery(status) {
    switch (status) {
      case "delivered":
        return (
          <div>
            <CheckCircleIcon sx={{ color: "#00880e" }} />
            <span>Entregue</span>
          </div>
        );
      case "onCarriage":
        return (
          <div>
            <LocalShippingIcon sx={{ color: "#033e8c" }} />
            <span>Em transporte</span>
          </div>
        );
      case "waitingForTransport":
        return (
          <div>
            <HailIcon sx={{ color: "#323232" }} />
            <span>Aguardando transporte</span>
          </div>
        );
      case "lookingForDelivery":
        return (
          <div>
            <FindReplaceIcon sx={{ color: "#FDDB2A" }} />
            <span>Buscando entregador</span>
          </div>
        );
      case "calledOff":
        return (
          <div>
            <CancelIcon sx={{ color: "#C70000" }} />
            <span>Cancelado</span>
          </div>
        );
      default:
        return (
          <div>
            <CatchingPokemonIcon sx={{ color: "#323232" }} />
            <span>Capturando entrega...</span>
          </div>
        );
    }
  }

  return (
    <>
      <div className={styles.box}>
        <header>
          <h1>{name}</h1>
          {statusDelivery(status)}
        </header>
        <main>
          {(status === "onCarriage" || status === "waitingForTransport") ?? (
            <div>
              <p>Em curso {course}</p>
            </div>
          )}
        </main>
        <footer>
          {true ?? (
            <p>Estamos procurando o melhor entregador para levar seu pacote.</p>
          )}
        </footer>
      </div>
    </>
  );
}
