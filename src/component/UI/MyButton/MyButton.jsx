import React from 'react';
import './MyButton.scss';

const MyButton = ({children, onclick, ...props}) => {
  const switchStyle = (props) => {
    switch(props.color) {
      case 'green':
        return `button--green`;

      case 'yellow':
        return `button--yellow`;

      default:
        return '';
    }
  };

  const styleBtn=switchStyle(props);

  return (
    <button
      onClick={onclick}
      className={`button ${styleBtn}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
