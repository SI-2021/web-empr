import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Menu } from "../components/Menu";
import { normalizarUser, saveUser } from "../helpers/User";

// Database
import db from "../services/database";
import { get, set, ref, child } from "firebase/database";

//Componentes Material UI
import { TextField, Button } from "@material-ui/core";

//Estilos
import styles from "../styles/profile.module.css";

export default function Profile() {
  const history = useHistory();

  // Objeto user para fácil manipulação
  const [user, setUser] = useState(normalizarUser({}));

  /* Dados do usuário
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  //Endereço
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  //Contato
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [phoneNumber2, setPhone2] = useState("");*/

  //Dados de entregador
  const [isDeliveryman, setIsDeliveryman] = useState(false);
  /*const [cnh, setCnh] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [renavan, setRenavan] = useState("");*/

  useEffect(() => {
    const userJson = JSON.parse(localStorage.getItem("user"));

    get(child(ref(db), `/Pessoa/${userJson.id}`))
      .then(response => {
        let data = response.val();

        if (data) {
          data.id = userJson.id;
          data = normalizarUser(data);

          if (Object.keys(data.entregador).length !== 0) {
            setIsDeliveryman(true);
          }

          setUser(data);
        }
      });
  }, []);

  function updateField(e) {
    const userObj = { ...user }

    let campo = e.target.name.split(".");

    if (campo.length === 2 && campo[0] === "entregador") {
      userObj.entregador[campo[1]] = e.target.value;
    } else {
      userObj[e.target.name] = e.target.value;
    }

    saveUser(set, ref, db, userObj);

    setUser(userObj);
  }

  function disableDeliveryman() {
    const userObj = { ...user }
    userObj.entregador = {}

    saveUser(set, ref, db, userObj);

    setUser(userObj);
    setIsDeliveryman(false);
  }

  return (
    <>
      <head>
        <title>Perfil | Pack Delivery</title>
      </head>

      <Menu />
      <div className={styles.app}>
        <div className={styles.container}>
          <div className={styles.sides}>
            <div className={styles.content}>
              <span>Minhas Informações</span>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  size="small"
                  name="nome"
                  value={user.nome}
                  onChange={updateField}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Sobrenome"
                  variant="outlined"
                  size="small"
                  name="sobrenome"
                  value={user.sobrenome}
                  onChange={updateField}
                  fullWidth
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="CPF"
                  variant="outlined"
                  size="small"
                  name="cpf"
                  value={user.cpf}
                  onChange={updateField}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="RG"
                  variant="outlined"
                  size="small"
                  name="rg"
                  value={user.rg}
                  onChange={updateField}
                  fullWidth
                />
              </div>
            </div>

            <div className={styles.content}>
              <span>Endereço</span>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Endereço"
                  variant="outlined"
                  size="small"
                  name="endereco"
                  value={user.endereco}
                  onChange={updateField}
                  fullWidth
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Cidade"
                  variant="outlined"
                  size="small"
                  name="cidade"
                  value={user.cidade}
                  onChange={updateField}
                />
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  size="small"
                  name="estado"
                  value={user.estado}
                  onChange={updateField}
                />
                <TextField
                  id="outlined-basic"
                  label="País"
                  variant="outlined"
                  size="small"
                  name="pais"
                  value={user.pais}
                  onChange={updateField}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  size="small"
                  name="complemento"
                  value={user.complemento}
                  onChange={updateField}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  size="small"
                  name="cep"
                  value={user.cep}
                  onChange={updateField}
                />
              </div>
            </div>

            <div className={styles.content}>
              <span>Contato</span>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  size="small"
                  name="email"
                  value={user.email}
                  onChange={updateField}
                  type="email"
                  fullWidth
                />
              </div>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Celular"
                  variant="outlined"
                  size="small"
                  name="celular"
                  value={user.celular}
                  onChange={updateField}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Telefone"
                  variant="outlined"
                  size="small"
                  name="telefone"
                  value={user.telefone}
                  onChange={updateField}
                  fullWidth
                />
              </div>
            </div>
          </div>

          <div className={styles.dividerBar}></div>

          <div className={styles.sides}>
            {isDeliveryman ? (
              <>
                <div className={styles.content}>
                  <span>Informações do Motorista</span>

                  <div className={styles.line}>
                    <TextField
                      id="outlined-basic"
                      label="CNH"
                      variant="outlined"
                      size="small"
                      name="entregador.cnh"
                      value={user.entregador?.cnh}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className={styles.content}>
                  <span>Informações do Veículo</span>

                  <div className={styles.line}>
                    <TextField
                      id="outlined-basic"
                      label="Placa"
                      variant="outlined"
                      size="small"
                      name="entregador.placa_veiculo"
                      value={user.entregador?.placa_veiculo}
                      onChange={updateField}
                      fullWidth
                    />
                    <TextField
                      id="outlined-basic"
                      label="RENAVAN"
                      variant="outlined"
                      size="small"
                      name="entregador.renavan"
                      value={user.entregador?.renavan}
                      onChange={updateField}
                      fullWidth
                    />
                  </div>
                </div>

                <div className={styles.btnNope}>
                  <Button
                    variant="text"
                    color="error"
                    onClick={disableDeliveryman}
                  >
                    Não quero entregar
                  </Button>
                </div>
              </>
            ) : (
              <div className={styles.btnBox}>
                <Button
                  variant="contained"
                  onClick={() => setIsDeliveryman(true)}
                >
                  QUERO ENTREGAR
                </Button>
              </div>
            )}

            <div className={styles.btnBack}>
              <Button
                variant="outlined"
                onClick={() => {
                  history.length > 1 ? history.goBack() : history.push("home");
                }}
              >
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
