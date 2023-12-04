import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import {selectorFilter, setPageCount} from "../../redux/slice/filterSlice";
import {selectorData} from "../../redux/slice/peopleSlice";
import styles from './pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectorFilter).pageCount;
  const count = useSelector(selectorData).items.count;
  const pageCountData = count % 10 === 0 ? count / 10 : (count / 10) + 1;

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={evt => {
        dispatch(setPageCount(evt.selected + 1))
      }}
      pageRangeDisplayed={10}
      pageCount={parseInt(pageCountData, 10)}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
