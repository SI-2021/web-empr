// Material UI
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HailIcon from "@mui/icons-material/Hail";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export function Status({state}){
  function statusDelivery() {
    switch (state) {
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

  return(statusDelivery())

}