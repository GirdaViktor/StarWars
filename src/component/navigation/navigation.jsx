import React from 'react';
import { NAVIGATION_LIST } from "./navigation.enum";
import {NavLink} from "react-router-dom";
import  './navigation.scss';


const Navigation = () => {
  return (
    <nav className='menu'>
      <input id="menu__hamburger" className='menu__hamburger' type="checkbox"/>
      <label className='menu__hamburger-btn' htmlFor="menu__hamburger">
        <span></span>
      </label>

      <ul className='menu__items'>
        {
          NAVIGATION_LIST.map(item =>
            <li key={item.title} className='menu__item'>
              <NavLink
                to={item.url}
                className='menu__link'>{item.title}</NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Navigation;
