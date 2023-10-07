import { useState } from "react";
const Pagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const changePage = (direction) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setPageSAFE = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
export default Pagination;


// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Btn, Number, Wrapper } from '../UI/ButtonPagination/ButtonPagination.styled';

// const Pagination = ({ count, onPageChange, pageType, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     setCurrentPage(1); // Скидаємо поточну сторінку при зміні даних
//   }, [count, itemsPerPage]);

//   const pageCount = Math.ceil(count / itemsPerPage);

//   const setPage = (num) => {
//     if (num >= 1 && num <= pageCount) {
//       setCurrentPage(num);
//       onPageChange(num);
//     }
//   };

//   return (
//     <Wrapper>
//       {[...Array(pageCount).keys()].map((el) => (
//         <li key={el}>
//           <Link to={`/${pageType}/${el + 1}`}>
//             <Btn
//               onClick={() => setPage(el + 1)}
//               active={`${currentPage === el + 1 ? 'active' : ''}`}
//             >
//               <Number>{el + 1}</Number>
//             </Btn>
//           </Link>
//         </li>
//       ))}
//     </Wrapper>
//   );
// };

// Pagination.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   pageType: PropTypes.string.isRequired,
//   itemsPerPage: PropTypes.number.isRequired,
// };

// export default Pagination;
