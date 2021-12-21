import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Paginate.scss';
const Paginate = ({ currentPage, totalPages, paginate }) => {
  const [page, setPage] = useState();
  const [totalPageNumber, setTotalPageNumber] = useState();

  useEffect(() => {
    setPage(currentPage);
    setTotalPageNumber(totalPages);
  }, [currentPage, totalPages]);
  return (
    <>
      <span className="page-count">
        {page} - {totalPageNumber}
      </span>
      <button
        className={page > 1 ? 'paginate-button' : 'paginate-button disable'}
        onClick={() => paginate('prev')}
      >
        Prev
      </button>
      <button
        className={
          page >= totalPageNumber
            ? 'paginate-button disable'
            : 'paginate-button'
        }
        onClick={() => paginate('next')}
      >
        Next
      </button>
    </>
  );
};

export default Paginate;
