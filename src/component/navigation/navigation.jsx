import React from 'react';
import styles from './navigation.module.scss';
import { NAVIGATION_LIST } from "./navigation.enum";
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.menu}>
      <input id="menu__hamburger" className={styles.menu__hamburger} type="checkbox"/>
      <label className={styles.menu__hamburger_btn} htmlFor="menu__hamburger">
        <span></span>
      </label>

      <ul className={styles.menu__items}>
        {
          NAVIGATION_LIST.map(item =>
            <li key={item.title} className={styles.menu__item}>
              <NavLink
                to={item.url}
                className={styles.menu__link}>{item.title}</NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Navigation;
