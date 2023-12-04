import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataItems, selectorData} from "../../../redux/slice/peopleSlice";

import CharacterList from "../../characterList/characterList";
import Language from "../../language/language";
import Filter from "../../filter/Filter";
import {selectorFilter} from "../../../redux/slice/filterSlice";

import './CharactersPage.scss';

const CharactersPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorData);
  const filter = useSelector(selectorFilter);
  const filterItem = filter.filterValue;
  const currentPage = filter.pageCount;

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchDataItems({
        filterItem,
        currentPage
      }));
    };

    fetchData();
  }, [filterItem, currentPage]);

  return (
    <div className={'character'}>
      <div className={'character__wrapper'}>
        <Language className={'character__language'}/>
        <h1>{data.items.count} Peoples for you to choose your favorite</h1>
        {data.status === 'loading' ? <div>Идет загрузка данных</div> : ''}
        {data.status === 'error' ? <div>Ошибка при получиении данных</div> : ''}
        {data.status === 'success'
          ? <>
            <Filter className={'character__sort'} />
            <CharacterList />
          </>
          : ''
        }
      </div>
    </div>
  );
};

export default CharactersPage;
