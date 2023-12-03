import React from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../../UI/btn/MyButton";
import styles from './errorPage.module.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const redirectReturn = () => {
    navigate('/');
  };
  return (
     <div className={styles.error_page}>
       <div className={styles.error_page__wrapper}>
         <img src="./img/404.svg" alt="Ошибка 404"/>
       </div>
       <MyButton
         color={'green'}
         onclick={redirectReturn}
       >Return</MyButton>
     </div>
  );
};

export default ErrorPage;
