import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";

//Material UI
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";

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

export function Menu() {
  const history = useHistory();
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
            <Link to={'home'}>Home</Link>
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
        className={styles.drawer}
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
                <ListItemButton onClick={() => {}}>
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
                <ListItemButton onClick={() => {}}>
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
                <ListItemButton onClick={() => {history.push('perfil')}}>
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
