import React from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import  './homePage.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const redirectReturn = () => {
    navigate('/characters');
  };

 return (
   <div className='home-page'>
     <div className='home-page__wrapper'>
       <h1>Find all your
         favorite character</h1>
       <div className='home-page__description'>
         You can find out all the information about your favorite characters
       </div>
       <MyButton
         color={'yellow'}
         onclick={redirectReturn}
       >See more...</MyButton>
     </div>
   </div>
 )
};

export default HomePage;
