import React from 'react';
import CardProp from "../cardProp/cardProp";
import TagList from "../UI/tagList/tagList";

import './characterCard.scss';

const CharacterCard = ({value}) => {
  const cardProp = [
    {
      value: value.height,
      name: 'height'
    },
    {
      value: value.mass,
      name: 'mass'
    }
  ];

  const tags = [
    {item: 'gender', value: value.gender},
    {item: 'birthYear', value: value.birth_year}
  ];

  return (
    <div className={'character-card'}>
      <h3>{value.name}</h3>
      <CardProp className={'character-card__props'} value={cardProp}/>
      <TagList className={'character-card__tags'} value={tags}/>
    </div>
  );
};

export default CharacterCard;
