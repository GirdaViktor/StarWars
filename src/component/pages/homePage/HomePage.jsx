import React from 'react';
import MyButton from "../../UI/btn/MyButton";

const HomePage = () => {
 return (
   <>
     <MyButton
       color={'yellow'}
       onclick={evt => evt.preventDefault()}
     >See more...</MyButton>
   </>
 )
};

export default HomePage;
