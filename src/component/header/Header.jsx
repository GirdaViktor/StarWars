import React from 'react';
import styles from './header.module.scss';
import {Link} from "react-router-dom";
import Navigation from "../navigation/navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to='/' className={styles.logo}>
          <img width={'150px'} src="./img/logo.svg" alt="Logo"/>
        </Link>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
