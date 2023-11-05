// import { MainTitle, SectionComponent } from "./Home.styled";
// import { cardsData } from '../data/CardData.json';
// import { useEffect, useState } from "react";
// import CardList from "../Pagination/CardList";
// import NavMenu from "../NavMenu/NavMenu";

// import { useState, useEffect } from "react";
// import { MainTitle, SectionComponent } from "./Home.styled";
// import { cardsData } from '../data/CardData.json';
// import CardList from "../Pagination/CardList";
// import NavMenu from "../NavMenu/NavMenu";

// export const Team = () => {
//   const [filter, setFilter] = useState("");
//   const [filteredData, setFilteredData] = useState(cardsData);
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedName, setSelectedName] = useState("");
//   const [selectedTitle, setSelectedTitle] = useState("");

//   const resetFilters = () => {
//     setSelectedDepartment("");
//     setSelectedName("");
//     setSelectedTitle("");
//     setFilter("");
//   };

//   const handleDepartmentChange = (department) => {
//     setSelectedDepartment(department);
//   };

//   const handleNameChange = (name) => {
//     setSelectedName(name);
//   };

//   const handleTitleChange = (title) => {
//     setSelectedTitle(title);
//   };

//   useEffect(() => {
//     const filtered = cardsData.filter((item) => {
//       if (selectedDepartment && item.department !== selectedDepartment) {
//         return false;
//       }
//       if (selectedName && !item.name.toLowerCase().includes(selectedName.toLowerCase())) {
//         return false;
//       }
//       if (selectedTitle && !item.title.toLowerCase().includes(selectedTitle.toLowerCase())) {
//         return false;
//       }
//       return true;
//     });

//     setFilteredData(filtered);
//   }, [selectedDepartment, selectedName, selectedTitle]);

//   return (
//     <SectionComponent>
//       <MainTitle>
//         Викладацький склад
//       </MainTitle>
//       <NavMenu
//         departments={filter.departments}
//         onDepartmentChange={handleDepartmentChange}
//         onNameChange={handleNameChange}
//         onTitleChange={handleTitleChange}
//       />
//       <button onClick={resetFilters}>Скинути фільтри</button>
//       <CardList items={filteredData} />
//     </SectionComponent>
//   );
// };




// export const Team = () => {
//   const [filter, setFilter] = useState("");
//   const [filteredData, setFilteredData] = useState(cardsData);

//     const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const resetFilters = () => {
//     setFilter("");
//     setFilteredData(cardsData);
//   };

//   useEffect(() => {
//     if (filter === "") {
//       setFilteredData(cardsData);
//     } else {
//       const filteredCards = cardsData.filter((card) => {
//         const isNameMatch = card.name.includes(filter); 
//         const isPositionMatch = card.title.includes(filter); 
//         const isDepartmentMatch = card.department === filter; 
//         return isNameMatch && isPositionMatch && isDepartmentMatch;
//       });
//       setFilteredData(filteredCards);
//     }
//   }, [filter]);

//   return (
//     <SectionComponent>
//       <MainTitle>
//         Викладацький склад
//       </MainTitle>
//       <NavMenu
//         setFilter={setFilter}
//         // setFilter={filter}
//         data={filteredData}
//         onFilterChange={handleFilterChange}
//       />
//       <button onClick={resetFilters}>Скинути фільтри</button>
//       <CardList items={filteredData} />
//     </SectionComponent>
//   );
// };

import PropTypes from 'prop-types';
import { MainTitle, SectionComponent } from "./Home.styled";
import { cardsData } from '../data/CardData.json';
import { useState } from "react";
import CardList from "../Pagination/CardList";
import NavMenu from "../NavMenu/NavMenu";

export const Team = () => {
  // const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState(cardsData);

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData);
  };

 

  return (
    <SectionComponent>
      <MainTitle>
        Викладацький склад
      </MainTitle>
       <NavMenu  onFilterChange={handleFilterChange} data={filteredData} />
      <CardList data={filteredData} />
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

Team.propTypes = {
  data: PropTypes.array,
};

// export default Team;
