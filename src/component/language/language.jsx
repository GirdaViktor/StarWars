import React from 'react';
import {LANGUAGE_LIST} from './language.enum';
import './language.scss';

const Language = ({...props}) => {
  return (
    <div className={`language ${props.className}`}>
      <span className={'language__title'}>language: </span>
      <ul className={'language__items'}>
        {LANGUAGE_LIST.map(item =>
          <li key={item} className={'language__item'}>
            {item}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Language;
