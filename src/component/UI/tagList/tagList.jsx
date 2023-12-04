import React from 'react';
import './tagList.scss';

const TagList = ({value, ...props}) => {
  const getGenderTag = (value, i) => {
    switch (value) {
      case 'male':
        return (<li key={i} className={'tag__item'}>
          <div className={'tag tag--green'}>{value}</div>
        </li>);
        break;

      case 'female':
        return (<li key={i} className={'tag__item'}>
          <div className={'tag tag--violet'}>{value}</div>
        </li>);
        break;

      case 'hermaphrodite':
        return (<li key={i} className={'tag__item'}>
          <div className={'tag tag--yellow'}>{value}</div>
        </li>);
        break;

      default:
        return '';
    }
  };

  const getTags = (value, i) => {
    switch (value.item) {
      case 'gender':
        return (getGenderTag(value.value, i));
        break;

      case 'birthYear':
        return (
          <li key={i} className={'tag__item'}>
            <div className={'tag tag--aquamarine'}>{value.value}</div>
          </li>
        );
        break;

      default:
        return '';
    }
  };

  return (
    <ul className={`tag__items ${props.className}`}>
      {
        value.map((item, i) => getTags(item, i))
      }
    </ul>
  );
};

export default TagList;
