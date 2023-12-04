import React from 'react';
import TagList from "../UI/tagList/tagList";
import './profile.scss';

const Profile = ({value}) => {
  const tags = [
    {item: 'gender', value: value.gender},
    {item: 'birthYear', value: value.birth_year}
  ];
  
  const getUrlProfilePicture = (value) => {
    switch (value.gender) {
      case 'male':
        return "./img/icon-male.svg";

      case 'female':
        return "./img/icon-female.svg";

      case 'hermaphrodite':
        return "./img/user-profile.svg";

      default:
        return "./img/user-profile.svg";
    }
  };

  return (
    <div className={'profile'}>
      <img className={'profile__img'} src={getUrlProfilePicture(value)} alt={value.name}/>;
      <TagList value={tags} className={'profile__taglist'} />
    </div>
  );
};

export default Profile;
