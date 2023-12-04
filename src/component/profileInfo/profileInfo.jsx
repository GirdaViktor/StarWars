import React from 'react';
import CardProp from "../cardProp/cardProp";
import './profileInfo.scss';

const ProfileInfo = ({value}) => {
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

  return (
    <div className={'profile-info'}>
      <h3>{value.name}</h3>
      <div className={'profile-info__signs'}>
        <span className={'profile-info__signs-row'}>{value.hair_color !== 'n/a' ? `Hair color: ${value.hair_color}` : ''}</span>
        <span className={'profile-info__signs-row'}>{value.skin_color !== 'n/a' ? `Skin color: ${value.skin_color}` : ''}</span>
        <span className={'profile-info__signs-row'}>{value.eye_color !== 'n/a' ? `Eye color: ${value.eye_color}` : ''}</span>
      </div>
      <CardProp className={'profile-info__props'} value={cardProp}/>
    </div>
  );
};

export default ProfileInfo;
