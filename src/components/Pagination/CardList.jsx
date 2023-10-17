// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { List, ContainerBtnPagination } from './CardList.styled.js';
// import Pagination from './Pagination.jsx';
// import ButtonPagination from '../UI/ButtonPagination/ButtonPagination.jsx';

// import { Cards } from '../UI/Card/Card.jsx';


// const CardList = ({ items }) => {
//   const [contentPerPage, setContentPerPage] = useState(6);

//   useEffect(() => {
//     const changeNumberItems = () => {
//       if (window.innerWidth > 778) {
//         setContentPerPage(6);
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

//   const {
//     firstContentIndex,
//     lastContentIndex,
//     nextPage,
//     prevPage,
//     page,
//     setPage,
//     totalPages,
//   } = Pagination({
//     contentPerPage,
//     count: items.length,
//   });

//   const elements = items
//     .slice(firstContentIndex, lastContentIndex)
//    .map((item, index) => (
//       <Cards key={index}/>

// ));
//   return (
//     <>
//       <List>{elements}</List>
//       <ContainerBtnPagination>
//         <ButtonPagination
//           prevPage={prevPage}
//           totalPages={totalPages}
//           nextPage={nextPage}
//           page={page}
//           setPage={setPage}
//           pageType="about/team"
//         />
//       </ContainerBtnPagination>
//     </>
//   );
// };

// export default CardList;

// CardList.propTypes = {
//   items: PropTypes.array,
//   onDel: PropTypes.func,
// };
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ContainerBtnPagination } from './CardList.styled.js';
import Pagination from './Pagination.jsx';
// import ButtonPagination from '../UI/ButtonPagination/ButtonPagination.jsx';
import Cards from '../UI/Card/Card.jsx';

const CardList = ({ items }) => {
  const [contentPerPage, setContentPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const changeNumberItems = () => {
      if (window.innerWidth > 778) {
        setContentPerPage(16);
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

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
     <List>
        <Cards items={items.slice((currentPage - 1) * contentPerPage, currentPage * contentPerPage)} />
      </List>
      <ContainerBtnPagination>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(items.length / contentPerPage)}
          onChangePage={handleChangePage}
          pageType="team"
        />
      </ContainerBtnPagination>
    </>
  );
};

CardList.propTypes = {
  items: PropTypes.array,
};

export default CardList;
