import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataItems, selectorData} from "../../../redux/slice/peopleSlice";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectorData).items;
  const fetchData =  () => {
    dispatch(fetchDataItems());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      страница о персонажах
    </>
  );
};

export default CharactersPage;
