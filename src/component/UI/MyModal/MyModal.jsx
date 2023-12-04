import React from 'react';
import './MyModal.scss';

const MyModal = ({active, setActive, children}) => {

  const closeModal = () => {
    setActive(false);
  };

  return (
    <div className={active ?' modal modal--active' : 'modal'} onClick={closeModal}>
      <div className="modal__content"
        onClick={(evt) => evt.stopPropagation()}
      >
        <div className="modal__close"
             onClick={closeModal}
        >
          <img src="./img/close-icon.svg" alt=""/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
