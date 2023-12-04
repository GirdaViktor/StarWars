import React from 'react';
import './cardProp.scss';

const CardProp = ({value, ...props}) => {
  return (
    <ul className={`card-prop ${props.className}`}>
      {
        value.map((item, i) => {
          return (
              item.value !== 'unknown'
                ? <li key={i} className={'card-prop__item'}>
                    <div className="card-prop__value">{item.value}</div>
                    <div className="card-prop__description">{item.name}</div>
                </li>
                : '')
        })
      }
    </ul>
  );
};

export default CardProp;
