import React, { useState } from 'react';

import { Menu as MenuIcon, Settings  } from '@material-ui/icons';

import styles from '../styles/components/menu.module.css';

export function Menu(){


  return(
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.sideLeft}>
          <button className={styles.buttonMenus} onClick={() => {}}>
            <MenuIcon color="white" fontSize="large" />
          </button>
          <a href='/home'>Home</a>
        </div>

        <div>
        <button className={styles.buttonMenus} onClick={() => {}}>
            <Settings color="white" fontSize="large" />
          </button>
        </div>
      </div>

    </div>
  )
}