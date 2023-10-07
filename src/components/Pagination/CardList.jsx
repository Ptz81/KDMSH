import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ContainerBtnPagination } from './CardList.styled.js';
import Pagination from './Pagination.jsx';
import ButtonPagination from '../UI/ButtonPagination/ButtonPagination.jsx';
import { ContainerCard } from '../UI/Card/Card.styled.js';


const CardList = ({ items }) => {
  const [contentPerPage, setContentPerPage] = useState(3);

  useEffect(() => {
    const changeNumberItems = () => {
      if (window.innerWidth > 778) {
        setContentPerPage(3);
      } else {
        setContentPerPage(2);
      }
    };
    changeNumberItems();

    window.addEventListener('resize', changeNumberItems);
    return () => {
      window.removeEventListener('resize', changeNumberItems);
    };
  }, []);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = Pagination({
    contentPerPage,
    count: items.length,
  });

  const elements = items
    .slice(firstContentIndex, lastContentIndex)
   .map((item, index) => (
      <ContainerCard key={index}/>

));
  return (
    <>
      <List>{elements}</List>
      <ContainerBtnPagination>
        <ButtonPagination
          prevPage={prevPage}
          totalPages={totalPages}
          nextPage={nextPage}
          page={page}
          setPage={setPage}
          pageType="about/team"
        />
      </ContainerBtnPagination>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  items: PropTypes.array,
  onDel: PropTypes.func,
};

// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import Card from '../UI/Card/Card.jsx';
// import { List, ContainerBtnPagination } from './CardList.styled.js';
// import ButtonPagination from '../UI/ButtonPagination/ButtonPagination.jsx';

// const CardList = ({ items, itemsPerPage, currentPage }) => {
//   const [contentPerPage, setContentPerPage] = useState(itemsPerPage);

//   useEffect(() => {
//     const changeNumberItems = () => {
//       if (window.innerWidth > 1200) {
//         setContentPerPage(9);
//       } else if (window.innerWidth > 778) {
//         setContentPerPage(4);
//       } else {
//         setContentPerPage(2);
//       }
//     };
//     changeNumberItems();

//     window.addEventListener('resize', changeNumberItems);
//     return () => {
//       window.removeEventListener('resize', changeNumberItems);
//     };
//   }, []);
//  const handlePageChange = (newPage) => {
//   // Перевіряємо, чи нова сторінка знаходиться в межах дійсних сторінок
//   if (newPage >= 1 && newPage <= Math.ceil(items.length / contentPerPage)) {
//     currentPage(newPage);
//   }
// };

//   const elements = items
//     .slice((currentPage - 1) * contentPerPage, currentPage * contentPerPage)
//     .map((item, index) => (
//       <Card key={index} {...item} />
//     ));

//   return (
//     <>
//       <List>{elements}</List>
//       <ContainerBtnPagination>
//         <ButtonPagination
//           prevPage={() => handlePageChange(currentPage - 1)}
//           totalPages={Math.ceil(items.length / contentPerPage)}
//           nextPage={() => handlePageChange(currentPage + 1)}
//           page={currentPage}
//           setPage={handlePageChange}
//           pageType="catalog"
//         />
//       </ContainerBtnPagination>
//     </>
//   );
// };

// CardList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.object),
//   itemsPerPage: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
// };

// export default CardList;
