import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectorFilter, setFilter} from "../../redux/slice/filterSlice";
import {selectorData, setData} from "../../redux/slice/peopleSlice";

import {EYES} from "./Filter.enum";
import './Filter.scss';

const Filter = ({...props}) => {
  const [filterPopup, setFilterPopup] = useState(false);
  const filterItem = useSelector(selectorFilter).filter;
  const data = useSelector(selectorData);
  const items = data.items.results;
  const dispatch = useDispatch();

  const onChangeSort = (value) => {
    setFilterPopup(false);

    dispatch(setFilter(value));

    if (value.value === 'all') {
      dispatch(setData(items));
    } else {
      dispatch(setData([...items].filter(item => item.eye_color
        .toLowerCase()
        .includes(value.filterProperty.toLowerCase()) ? true : false)));
    }
  };

  const all = {value: 'all', filterProperty: 'all'};

  return (
    <div className={`filter ${props.className}`}  onClick={() => setFilterPopup(!filterPopup)}>
      <span className={'filter__title'}>color eye </span>
      <div className="filter__wrapper">
        <span className={'filter__current-value'}>{filterItem.value}</span>
        {
          filterPopup
            ? (
              <div className={'filter__popup'}>
                <ul className={'filter__items'}>
                  {
                    filterItem.value !== 'all'
                      ? <li
                        key={all.value}
                        className={filterItem.filterProperty === all.filterProperty ? 'filter__item filter__item--active' : 'filter__item'}
                        onClick={() => {
                          onChangeSort(all);
                        }}
                      >{all.value}</li>
                      : ''
                  }
                  {
                    EYES.map((item, i) => <li
                      key={i}
                      className={filterItem.filterProperty === item.filterProperty ? 'filter__item filter__item--active' : 'filter__item'}
                      onClick={() => {
                        onChangeSort(item);
                      }}
                    >{item.value}</li>)
                  }
                </ul>
              </div>)
            : ''
        }
        <img className={'filter__icon-arrow'} src="./img/arrow-filter.svg" alt=""/>
      </div>
    </div>
  );
};

export default Filter;
