import React, { Children, useState } from "react";

//Material UI
import Toolbar from "@material-ui/core";
import AppBar from "@material-ui/core";
import Divider from "@material-ui/core";
import DrawerHeader from "@material-ui/core";
import Main from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/styles";

//Icones
import {
  Menu as MenuIcon,
  Settings as ConfigIcon,
  Add as AddIcon,
  AttachMoney as MoneyIcon,
  AccountCircle as AccountIcon,
  ChevronLeft as ChevronLeftIcon
} from "@material-ui/icons";

//Estilos
import styles from "../styles/components/menu.module.css";

export function Menu(children) {
  // Menu suspenso
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.sideLeft}>
          <button
            className={styles.buttonMenus}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon color="white" fontSize="large" />
          </button>
          <nav>
            <a href="/home">Home</a>
          </nav>
        </div>

        <div>
          <button className={styles.buttonMenus} onClick={() => {}}>
            <ConfigIcon color="white" fontSize="large" />
          </button>
        </div>
      </div>
      <Drawer
        variant="permanent"
        ModalProps={{
          keepMounted: true
        }}
        className={`${styles.drawer}`}
      >
        {state.left && ( //Drawer menu vertical do lado esquerdo
          <>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "#141414",
                height: "100vh"
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  flex: "display",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "0 1rem"
                }}
              >
                <IconButton onClick={toggleDrawer("left", false)}>
                  <ChevronLeftIcon color="white" />
                </IconButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton href="/simple-list" onClick={() => {}}>
                  <ListItemIcon>
                    <AddIcon color="white" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Nova postagem"
                    sx={{
                      color: "white.main"
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton href="/simple-list" onClick={() => {}}>
                  <ListItemIcon>
                    <MoneyIcon color="white" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Pagamentos"
                    sx={{ color: "white.main" }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton href="/simple-list" onClick={() => {}}>
                  <ListItemIcon>
                    <AccountIcon color="white" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Meu Perfil"
                    sx={{ color: "white.main" }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
    </div>
  );
}
