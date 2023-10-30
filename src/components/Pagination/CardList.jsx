import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ContainerBtnPagination } from './CardList.styled.js';
import Pagination from './Pagination.jsx';
import Cards from '../UI/Card/Card.jsx';

const CardList = ({ items }) => {
  const [contentPerPage, setContentPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const changeNumberItems = () => {
      if (window.innerWidth > 778) {
        setContentPerPage(16);
      } else {
        setContentPerPage(6);
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
