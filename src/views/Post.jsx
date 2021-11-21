/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useHistory } from "react-router";
import { Menu } from "../components/Menu";

//Componentes Material UI
import { TextField, ToggleButtonGroup, ToggleButton, Button } from "@material-ui/core";

//Estilos
import styles from "../styles/post.module.css";

export default function Post() {
  const history = useHistory();

  //Informações do objeto
  let object = {
    name: "",
    description: "",
    boxShape: "",
    dimensions: {
      height: 0,
      width: 0,
      length: 0,
    },
    weight: 0,
  }

  //dados remetente
  let recipient = {
    address: "",
    state: "",
    city: "",
    cep: "",
    country: "",
    complement: "",
    responsible: "", //Nome do responsável no local de envio
  }

  //dados destinatário
  let sender = {
    address: "",
    state: "",
    city: "",
    cep: "",
    country: "",
    complement: "",
    senderName: "", //Nome do remetente
  }

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

  const handleChangeShapeBox = (event, newShapeBox) => {
    setAShapeBox(newShapeBox);
    console.log(event.currentTarget.value)
  };

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
                  onChange={() => {}}
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
                  onChange={() => {}}
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
                  name="s-adreess"
                  onChange={() => {}}
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
                  onChange={() => {}}
                />
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  size="small"
                  name="s-state"
                  onChange={() => {}}
                />
                <TextField
                  id="outlined-basic"
                  label="País"
                  variant="outlined"
                  size="small"
                  name="s-country"
                  onChange={() => {}}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  size="small"
                  name="s-complement"
                  onChange={() => {}}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  size="small"
                  name="s-cep"
                  onChange={() => {}}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Nome Responsável"
                  variant="outlined"
                  size="small"
                  name="s-name"
                  onChange={() => {}}
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
                  name="r-adreess"
                  onChange={() => {}}
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
                  onChange={() => {}}
                />
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  size="small"
                  name="r-state"
                  onChange={() => {}}
                />
                <TextField
                  id="outlined-basic"
                  label="País"
                  variant="outlined"
                  size="small"
                  name="r-country"
                  onChange={() => {}}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Complemento"
                  variant="outlined"
                  size="small"
                  name="r-complement"
                  onChange={() => {}}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  size="small"
                  name="r-cep"
                  onChange={() => {}}
                />
              </div>
              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Nome Responsável"
                  variant="outlined"
                  size="small"
                  name="r-name"
                  onChange={() => {}}
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
                  label="Altura"
                  variant="outlined"
                  size="small"
                  name="height"
                  onChange={() => {}}
                />
              </div>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Largura"
                  variant="outlined"
                  size="small"
                  name="width"
                  onChange={() => {}}
                />
              </div>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Comprimento"
                  variant="outlined"
                  size="small"
                  name="length"
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className={styles.content}>
              <span>Massa</span>
              <p>Medida de massa em gramas.</p>

              <div className={styles.line}>
                <TextField
                  id="outlined-basic"
                  label="Peso"
                  variant="outlined"
                  size="small"
                  name="weight"
                  onChange={() => {}}
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
                onClick={() => {}}
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
