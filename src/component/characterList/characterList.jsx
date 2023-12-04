import React, {useState} from 'react';
import {useSelector} from "react-redux";
import CharacterCard from "../characterCard/characterCard";
import {selectorData} from "../../redux/slice/peopleSlice";
import MyModal from "../UI/MyModal/MyModal";
import UserCard from "../userCard/userCard";
import Pagination from "../pagination/pagination";

import './characterList.scss';

const CharacterList = () => {
  const data = useSelector(selectorData);
  const items = data.cloneItems.results;
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState([]);

  const openModal = (value) => {
    setModalActive(true);
    setModalData(value)
  };

  return (
    <>
      <ul className={'character-list'}>
        {
          items.map((item, i) => <li className={'character-item'} key={i} onClick={() => {
            openModal(item);
          }}>
            <CharacterCard value={item} />
          </li>)
        }
      </ul>
      <Pagination/>
      <MyModal active={modalActive} setActive={setModalActive}>
        <UserCard value={modalData}/>
      </MyModal>
    </>
  );
};

export default CharacterList;
