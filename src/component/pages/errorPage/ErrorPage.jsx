import React from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import './errorPage.scss';

const ErrorPage = () => {
  const navigate = useNavigate();
  const redirectReturn = () => {
    navigate('/');
  };

  return (
     <div className='error-page'>
       <MyButton
         color={'green'}
         onclick={redirectReturn}
       >Return</MyButton>
     </div>
  );
};

export default ErrorPage;
