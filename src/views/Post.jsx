/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router";
import { Menu } from "../components/Menu";

import db from "../services/database";
import { get, push, ref, child } from "firebase/database";

import { normalizarUser } from "../helpers/User";
import { validaEntrega } from '../helpers/Entrega';

//Componentes Material UI
import { TextField, ToggleButtonGroup, ToggleButton, Button } from "@material-ui/core";

//Estilos
import styles from "../styles/post.module.css";

export default function Post() {
  const history = useHistory();

  const [user, setUser] = useState(normalizarUser({}));

  //Informações do objeto
  const [object, setObject] = useState({
    name: "",
    description: "",
    boxShape: "",
    dimensions: {
      height: 0,
      width: 0,
      length: 0,
    },
    weight: 0,
  });

  //dados remetente
  const [recipient, setRecipient] = useState({
    address: "",
    state: "",
    city: "",
    cep: "",
    country: "",
    complement: "",
    responsible: "", //Nome do responsável no local de envio
  });

  //dados destinatário
  const [sender, setSender] = useState({
    address: "",
    state: "",
    city: "",
    cep: "",
    country: "",
    complement: "",
    senderName: "", //Nome do remetente
  });

  //Formato da caixa
  const btnShapeStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    p: '2rem .5rem'
  }

  const children = [
    <ToggleButton value="rectangular" key="rectangular" sx={btnShapeStyles}>
      <img src="rectangle.svg" alt="Retângulo" />
      <span>Retângulo</span>
    </ToggleButton>,

    <ToggleButton value="cylinder" key="cylinder" sx={btnShapeStyles}>
      <img src="circle.svg" alt="Cilindro" />
      <span>Cilindro</span>
    </ToggleButton>,

    <ToggleButton value="trigonal" key="trigonal" sx={btnShapeStyles}>
      <img src="triangle.svg" alt="Triângulo" />
      <span>Triângulo</span>
    </ToggleButton>,
  ];

  const [shapeBox, setAShapeBox] = useState('web');

  useEffect(() => {
    const userJson = JSON.parse(localStorage.getItem("user"));

    get(child(ref(db), `/Pessoa/${userJson.id}`))
      .then(response => {
        let data = response.val();

        if (data) {
          data.id = userJson.id;

          data = normalizarUser(data);

          // Preenche com os dados do cadastro para comodidade
          sender.address = data.endereco;
          sender.city = data.cidade;
          sender.state = data.estado;
          sender.country = data.pais
          sender.complement = data.complemento;
          sender.cep = data.cep;
          sender.senderName = data.nome;

          setUser(data);
        }
      });
  }, []);

  const handleChangeShapeBox = (event, newShapeBox) => {
    setAShapeBox(newShapeBox);

    let data = { ...object }
    data.boxShape = newShapeBox;

    setObject(data);
  };

  const updateField = (e) => {
    const name = e.target.name;
    let data = null;

    switch (name.substring(0, 2)) {
      case "s-":
        data = { ...sender }
        data[name.substring(2)] = e.target.value;
        setSender(data);
        break;
      case "r-":
        data = { ...recipient }
        data[name.substring(2)] = e.target.value;
        setRecipient(data);
        break;
      default:
        data = { ...object }

        if (name.substring(0, 2) === "d-") {
          data.dimensions[name.substring(2)] = e.target.value;
        } else {
          data[name] = e.target.value;
        }

        setObject(data);
        break;
    }
  }

  const cadastrarPostagem = async () => {
    const entrega = {
      object,
      sender,
      recipient
    }

    const entregaValida = validaEntrega(entrega)
    console.log(`Entrega: ${entregaValida}`);

    // Galera do front deixa isso bonito xD
    if (!entregaValida) alert("Preencha todos os campos!");

    entrega.remetente_id = user.id;
    push(child(ref(db), `/Entrega/`), entrega)
      .then(response => {

        // Deixar bonito depois
        alert("Postagem salva com sucesso!");
        history.replace("home");
      });
  }

  return (
    <>
      <head>
        <title>Postagem | Pack Delivery</title>
      </head>

      <Menu />
      <div className={styles.app}>
        <div className={styles.container}>
          <div className={styles.sides}>
            <div className={styles.content}>
              <span>Informações do objeto</span>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  size="small"
                  name="name"
                  value={object.name}
                  onChange={updateField}
                  fullWidth
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Descrição"
                  variant="outlined"
                  size="small"
                  name="description"
                  value={object.description}
                  onChange={updateField}
                  fullWidth
                />
              </div>
            </div>

            <div className={styles.content}>
              <span>Remetente</span>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Endereço"
                  variant="outlined"
                  size="small"
                  name="s-address"
                  value={sender.address}
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
                  name="s-city"
                  value={sender.city}
                  onChange={updateField}
                />
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  size="small"
                  name="s-state"
                  value={sender.state}
                  onChange={updateField}
                />
                <TextField
                  id="outlined-basic"
                  label="País"
                  variant="outlined"
                  size="small"
                  name="s-country"
                  value={sender.country}
                  onChange={updateField}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  size="small"
                  name="s-complement"
                  value={sender.complement}
                  onChange={updateField}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  size="small"
                  name="s-cep"
                  value={sender.cep}
                  onChange={updateField}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Nome Responsável"
                  variant="outlined"
                  size="small"
                  name="s-senderName"
                  value={sender.senderName}
                  onChange={updateField}
                  fullWidth
                />
              </div>
            </div>

            <div className={styles.content}>
              <span>Destinatário</span>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Endereço"
                  variant="outlined"
                  size="small"
                  name="r-address"
                  value={recipient.address}
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
                  name="r-city"
                  value={recipient.city}
                  onChange={updateField}
                />
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  size="small"
                  name="r-state"
                  value={recipient.state}
                  onChange={updateField}
                />
                <TextField
                  id="outlined-basic"
                  label="País"
                  variant="outlined"
                  size="small"
                  name="r-country"
                  value={recipient.country}
                  onChange={updateField}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  size="small"
                  name="r-complement"
                  value={recipient.complement}
                  onChange={updateField}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  size="small"
                  name="r-cep"
                  value={recipient.cep}
                  onChange={updateField}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Nome Responsável"
                  variant="outlined"
                  size="small"
                  name="r-responsible"
                  value={recipient.responsible}
                  onChange={updateField}
                  fullWidth
                />

              </div>
            </div>
          </div>

          <div className={styles.dividerBar}></div>

          <div className={styles.sides}>
            <div className={styles.content}>
              <span>Formato da caixa</span>

              <div className={styles.line}>
                <ToggleButtonGroup
                  size="large"
                  color="primary"
                  value={shapeBox}
                  exclusive
                  onChange={handleChangeShapeBox}
                  fullWidth
                  sx={{
                    display: "flex",
                    flexWrap: true,
                  }}
                >
                  {children}
                </ToggleButtonGroup>
              </div>
            </div>

            <div className={styles.content}>
              <span>Dimensões</span>
              <p>Medida de comprimento em centímetros.</p>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Altura"
                  variant="outlined"
                  size="small"
                  name="d-height"
                  value={object.dimensions.height}
                  onChange={updateField}
                />
              </div>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Largura"
                  variant="outlined"
                  size="small"
                  name="d-width"
                  value={object.dimensions.width}
                  onChange={updateField}
                />
              </div>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Comprimento"
                  variant="outlined"
                  size="small"
                  name="d-length"
                  value={object.dimensions.length}
                  onChange={updateField}
                />
              </div>
            </div>

            <div className={styles.content}>
              <span>Massa</span>
              <p>Medida de massa em gramas.</p>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Peso"
                  variant="outlined"
                  size="small"
                  name="weight"
                  value={object.weight}
                  onChange={updateField}
                />
              </div>
            </div>

            <footer className={styles.footer}>
              <Button
                variant="outlined"
                onClick={() => {
                  history.length > 1 ? history.goBack() : history.push("home");
                }}
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                onClick={cadastrarPostagem}
              >
                Salvar
              </Button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
