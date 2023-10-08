// import { useState } from "react";
// const Pagination = ({ contentPerPage, count }) => {
//   const [page, setPage] = useState(1);

//   const pageCount = Math.ceil(count / contentPerPage);
//   const lastContentIndex = page * contentPerPage;
//   const firstContentIndex = lastContentIndex - contentPerPage;
//   const changePage = (direction) => {
//     setPage((state) => {
//       if (direction) {
//         if (state === pageCount) {
//           return state;
//         }
//         return state + 1;
//       } else {
//         if (state === 1) {
//           return state;
//         }
//         return state - 1;
//       }
//     });
//   };
//   const setPageSAFE = (num) => {
//     if (num > pageCount) {
//       setPage(pageCount);
//     } else if (num < 1) {
//       setPage(1);
//     } else {
//       setPage(num);
//     }
//   };
//   return {
//     totalPages: pageCount,
//     nextPage: () => changePage(true),
//     prevPage: () => changePage(false),
//     setPage: setPageSAFE,
//     firstContentIndex,
//     lastContentIndex,
//     page,
//   };
// };
// export default Pagination;

// import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Number, Wrapper } from '../UI/ButtonPagination/ButtonPagination.styled';
import {  Link, useNavigate } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onChangePage, pageType }) => {
     const navigate = useNavigate();
  const handlePageChange = (page) => {
  
    navigate(`/${pageType}/${page}`);
    onChangePage(page);
  };
  return (
    <Wrapper>
      {[...Array(totalPages).keys()].map((el) => (
        <li key={el}>
           <Link to={`/${pageType}/${el + 1}`}>
            <Btn
              onClick={() => handlePageChange(el + 1)}
              active={`${currentPage === el + 1 ? 'active' : ''}`}
            >
              <Number>{el + 1}</Number>
            </Btn>
          </Link>
        </li>
      ))}
    </Wrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func,
  pageType: PropTypes.string,
};

export default Pagination;

