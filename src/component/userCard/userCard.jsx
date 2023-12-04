import React from 'react';
import Profile from "../profile/profile";
import ProfileInfo from "../profileInfo/profileInfo";
import './userCard.scss';

const UserCard = ({value}) => {
  return (
    <div className={'user-card'}>
      <Profile value={value} />
      <ProfileInfo value={value} />
    </div>
  );
};

export default UserCard;
