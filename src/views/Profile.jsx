import { Menu } from "../components/Menu";

//Componentes Material UI
import { TextField } from "@material-ui/core";

//Estilos
import styles from "../styles/profile.module.css";

export default function Profile() {
  return (<>
    <head>
      <title>Perfil | Pack Delivery</title>
    </head>

    <Menu />
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.sides}>
          <span>Minhas Informações</span>
          <div>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Sobrenome"
              variant="outlined"
              size="small"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="CPF"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="RG"
              variant="outlined"
              size="small"
            />
          </div>
        </div>

        <div className={styles.dividerBar}></div>

        <div className={styles.sides}></div>
      </div>
    </div>
  </>);
}
