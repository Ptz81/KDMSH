import { MainText, MainTitle, SectionComponent } from "./Home.styled";
import {cardsData} from '../data/CardData.json';
import { useEffect, useState } from "react";
import CardList from "../Pagination/CardList";

export const Team = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    setData(cardsData);
  }, []); 
  return (
    <SectionComponent>
      <MainTitle>
        Викладацький склад
      </MainTitle>
      <MainText>
        В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають
        значний професійний досвід,гарантують індивідуальний підхід до кожного учня.
        Вони всебічно працюють над розвитком музичної грамотності, техніки гри, виразності та
        інтерпретації для забезпечення найкращих результатів навчання.
        Щорічно в школі навчаються 410 учнів з 5 до 18 років.
      </MainText>

      <CardList items={data}/>
      
    </SectionComponent>
  );
};
// import PropTypes from 'prop-types';
// import { MainText, MainTitle, SectionComponent } from "./Home.styled";
// import { useEffect, useState } from "react";
// import { Cards } from "../UI/Card/Card";
// import Pagination from "../Pagination/Pagination.jsx"; // Імпортуємо компонент пагінації
// import { cardsData } from '../data/CardData.json';

// export const Team = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const contentPerPage = 4; // Кількість карточок на одній сторінці

//   useEffect(() => {
//     setData(cardsData);
//   }, []);

//   // Функція для отримання поточних карточок на сторінці
//   const getCurrentPageData = () => {
//     const startIndex = (currentPage - 1) * contentPerPage;
//     const endIndex = startIndex + contentPerPage;
//     return data.slice(startIndex, endIndex);
//   };


//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <SectionComponent>
//       <MainTitle>Викладацький склад</MainTitle>
//       <MainText>
//         В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають
//         значний професійний досвід, гарантують індивідуальний підхід до кожного учня.
//         Вони всебічно працюють над розвитком музичної грамотності, техніки гри, виразності та
//         інтерпретації для забезпечення найкращих результатів навчання.
//         Щорічно в школі навчаються 410 учнів з 5 до 18 років.
//       </MainText>

//       {/* Передайте поточні карточки на сторінці в компонент Cards */}
//       <Cards items={getCurrentPageData()} />

//       {/* Додайте компонент пагінації */}
//       <Pagination
//         contentPerPage={contentPerPage}
//         count={data.length}
//         onPageChange={handlePageChange}
//       />
//     </SectionComponent>
//   );
// };

// Team.propTypes = {
//   data: PropTypes.array,
// };

// export default Team;
