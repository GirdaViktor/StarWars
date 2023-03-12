import React from 'react';
import styles from './button.module.scss';

const MyButton = ({children, onclick, ...props}) => {
  const switchStyle = (props) => {
    switch(props.color) {
      case 'green':
        return `${styles.button_green}`;
      break;
      case 'yellow':
        return `${styles.button_yellow}`;
    }
  };

  const styleBtn=switchStyle(props);

  return (
    <button
      onClick={onclick}
      className={`${styles.button} ${styleBtn}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
