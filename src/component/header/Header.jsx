import React from 'react';
import {Link} from "react-router-dom";
import Navigation from "../navigation/navigation";
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link to='/' className='logo'>
          <img src="./img/logo.svg" alt="Logo"/>
        </Link>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
