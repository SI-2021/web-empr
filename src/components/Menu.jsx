import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import auth from '../services/auth';

//Material UI
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@mui/material/ListItemButton";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { Menu as MenuAppBar, MenuItem } from "@material-ui/core";

//Icones
import {
  Menu as MenuIcon,
  Add as AddIcon,
  AttachMoney as MoneyIcon,
  AccountCircle as AccountIcon,
  ChevronLeft as ChevronLeftIcon
} from "@mui/icons-material";

//Estilos
import styles from "../styles/components/menu.module.css";

//Componente menu
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

  //Menu profile
  const [stateMenuProfile, setStateMenuProfile] = React.useState(null);

  const handleMenu = (event) => {
    setStateMenuProfile(event.currentTarget);
  };

  const handleClose = () => {
    setStateMenuProfile(null);
  };

  // ----

  async function handleLogout() {
    await auth.signOut();

    history.push("/");
  }

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
            <Link className={styles.link} to={"/home"}>Home</Link>
          </nav>
        </div>

        <div className={styles.sideRight}>
          <IconButton size="large" onClick={handleMenu} color="white">
            <AccountIcon />
          </IconButton>
          <MenuAppBar
            id="menu-appbar"
            anchorEl={stateMenuProfile}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(stateMenuProfile)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => history.push("/perfil")}>
              Meu Perfil
            </MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </MenuAppBar>
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
                <ListItemButton onClick={() => history.push("/postagem")}>
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
                <ListItemButton onClick={() => history.push('/pagamentos')}>
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
                <ListItemButton onClick={() => history.push('/perfil')}>
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
