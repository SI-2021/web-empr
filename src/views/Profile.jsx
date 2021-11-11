import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Menu } from "../components/Menu";

//Componentes Material UI
import { TextField, Button } from "@material-ui/core";

//Estilos
import styles from "../styles/profile.module.css";

export default function Profile() {
  const history = useHistory();

  // Dados do usuário
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [complement, setComplement] = useState();
  const [cep, setCep] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhone] = useState();
  const [phoneNumber2, setPhone2] = useState();

  //Dados de entregador
  const [isDeliveryman, setIsDeliveryman] = useState(false);
  const [cnh, setCnh] = useState();
  const [vehiclePlate, setVehiclePlate] = useState();
  const [renavan, setRenavan] = useState();

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
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Sobrenome"
                  variant="outlined"
                  size="small"
                  value={surname}
                  onChange={(e) => setSurname(e.currentTarget.value)}
                  fullWidth
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="CPF"
                  variant="outlined"
                  size="small"
                  value={cpf}
                  onChange={(e) => setCpf(e.currentTarget.value)}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="RG"
                  variant="outlined"
                  size="small"
                  value={rg}
                  onChange={(e) => setRg(e.currentTarget.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.currentTarget.value)}
                  fullWidth
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Cidade"
                  variant="outlined"
                  size="small"
                  value={city}
                  onChange={(e) => setCity(e.currentTarget.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  size="small"
                  value={state}
                  onChange={(e) => setState(e.currentTarget.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="País"
                  variant="outlined"
                  size="small"
                  value={country}
                  onChange={(e) => setCountry(e.currentTarget.value)}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  size="small"
                  value={complement}
                  onChange={(e) => setComplement(e.currentTarget.value)}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  size="small"
                  value={cep}
                  onChange={(e) => setCep(e.currentTarget.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
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
                  value={phoneNumber}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Telefone"
                  variant="outlined"
                  size="small"
                  value={phoneNumber2}
                  onChange={(e) => setPhone2(e.currentTarget.value)}
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
                      value={cnh}
                      onChange={(e) => setCnh(e.currentTarget.value)}
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
                      value={vehiclePlate}
                      onChange={(e) => setVehiclePlate(e.currentTarget.value)}
                      fullWidth
                    />
                    <TextField
                      id="outlined-basic"
                      label="RENAVAN"
                      variant="outlined"
                      size="small"
                      value={renavan}
                      onChange={(e) => setRenavan(e.currentTarget.value)}
                      fullWidth
                    />
                  </div>
                </div>

                <div className={styles.btnNope}>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => setIsDeliveryman(false)}
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
