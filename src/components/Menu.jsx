import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import {Popover, Typography,Main } from '@material-ui/core';
import { Menu as MenuIcon, Settings as ConfigIcon ,Add as AddIcon, AttachMoney as MoneyIcon, AccountCircle as AccountIcon } from '@material-ui/icons'


import styles from '../styles/components/menu.module.css';

export function Menu(){

  // Menu suspenso
  const [state, setState] = React.useState({
    left: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // ---
  
  //Popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  // ---

  const open = Boolean(anchorEl);

  const listItens = (anchor) => (
    <>
     
    </>
  );

  return(
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.sideLeft}>
          <button className={styles.buttonMenus} onClick={toggleDrawer('left', true)}>
            <MenuIcon color="white" fontSize="large" />
          </button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            { state.left && (
              <>
                <div className={styles.drawer}>
                  <div className={styles.background}></div>

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton href="/simple-list">
                        <ListItemIcon>
                          <AddIcon color="white"/>
                        </ListItemIcon>
                        <ListItemText 
                          primary="Nova postagem"
                          sx={{
                            color:'white.main',
                        }}/>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton href="/simple-list">
                        <ListItemIcon>
                          <MoneyIcon color="white"/>
                        </ListItemIcon>
                        <ListItemText 
                          primary="Pagamentos"
                          sx={{color:'white.main'}}
                        />
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemButton href="/simple-list">
                        <ListItemIcon>
                          <AccountIcon color="white"/>
                        </ListItemIcon>
                        <ListItemText 
                          primary="Meu Perfil"
                          sx={{color:'white.main'}}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                  
                </div>
              </>
            )}
          </Drawer>

          <nav>
            <a href='/home'>Home</a>
          </nav>

        </div>

        <div>
        <button className={styles.buttonMenus} onClick={() => {}} onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}>
            <ConfigIcon color="white" fontSize="large" />
        </button>
        <Popover
          id="mouse-over-popover"
          sx={{ pointerEvents: 'none', }} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} transformOrigin={{ vertical: 'left', horizontal: 'left', }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>Em construção...</Typography>
        </Popover>
        </div>
      </div>

      
    </div>
  )
}