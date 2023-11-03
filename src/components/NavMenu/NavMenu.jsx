import PropTypes from "prop-types";
import {InputFilter} from "../Filter/Filter.jsx";
import { useEffect, useState } from "react";
import CustomSelectComponent from "../UI/Select/Select.jsx";
import styled from "styled-components";
import { Button } from "../UI/Button/Button.styled.js";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  color: var(--lightGray);
        font-size: 14px;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const NavMenu = ({ onFilterChange, data }) => {

 const [filters, setFilters] = useState({
    department: "Виберіть відділ",
    name: "Пошук за прізвищем",
    title: "Пошук за посадою",
  });

  const [uniqueDepartments, setUniqueDepartments] = useState([]);
  const [uniqueName, setUniqueName] = useState([]);
  const [uniqueTitle, setUniqueTitle] = useState([]);


  useEffect(() => {
    const departments = Array.from(
      new Set(data.map((item) => item.department))
    );
    const titles = Array.from(
      new Set(data.map((item) => item.title))
    );
    const names = Array.from(new Set(data.map((item) => item.name))
    );
setUniqueDepartments(["Виберіть відділ", ...departments]);
setUniqueName(["Пошук за прізвищем", ...names]);
setUniqueTitle(["Пошук за посадою", ...titles]);
  }, [data]);

  const handleSearchClick = () => {
      const filterOptions = {
      department: filters.department,
      name: filters.name !== "Пошук за прізвищем" ? filters.name.toLowerCase() : "",
      title: filters.title !== "Пошук за посадою" ? filters.title.toLowerCase() : "",
    };

    const filteredCards = data.filter((card) => {
    const isDepartmentMatch = filterOptions.department === "Виберіть відділ" || card.department === filterOptions.department;

      const isNameMatch = filterOptions.name === "" || card.name.toLowerCase().includes(filterOptions.name);

      const isPositionMatch = filterOptions.title === "" || card.title.toLowerCase().includes(filterOptions.title);

      // return isDepartmentMatch && isNameMatch && isPositionMatch;
      return isDepartmentMatch ? (isNameMatch && isPositionMatch) : false;
    });

    // setFilters(filteredCards);
    onFilterChange(filteredCards);
    console.log(filteredCards);
     setFilters({
      department: "Виберіть відділ",
      name: "Пошук за прізвищем",
      title: "Пошук за посадою",
    });
  };

  const handleInputChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  //   const handleResetFilters = () => {
  //   setFilters({
  //     department: "Виберіть відділ",
  //     name: "Пошук за прізвищем",
  //     title: "Пошук за посадою",
  //   });
  // };
    

  return (
    <FilterContainer>
      <CustomSelectComponent
        key={data.id}
        options={uniqueDepartments}
        value={filters.department}
        onChange={(value) => handleInputChange('department', value)}
        placeholder="Виберіть відділ"
        onFilterChange={onFilterChange}
      />

      <InputFilter
        options={uniqueName}
        
        onFilterChange={(value) => handleInputChange('name', value)}
        inputStyle="active"
        placeholder="Пошук за прізвищем"
        name="name"
      />
      <InputFilter
        options={uniqueTitle}
        
        onFilterChange={(value) => handleInputChange('title', value)}
        inputStyle="active"
        placeholder="Пошук за посадою"
        name="title"
      />
      <Button style={{ margin: "0px" }}
        onClick={handleSearchClick}>Пошук</Button>
    
       {/* <Button onClick={handleResetFilters}>Скинути</Button> */}
    </FilterContainer>
  );
};
// const NavMenu = ({ onFilterChange, data }) => {
//   const [filters, setFilters] = useState({
//     department: "Виберіть відділ",
//     name: "Пошук за прізвищем",
//     title: "Пошук за посадою",
//   });

//   const handleSearchClick = () => {
//     const filterOptions = {
//       department: filters.department,
//       name: filters.name !== "Пошук за прізвищем" ? filters.name.toLowerCase() : "",
//       title: filters.title !== "Пошук за посадою" ? filters.title.toLowerCase() : "",
//     };
//     onFilterChange(filterOptions);
//   };

//   return (
//     <FilterContainer>
//        <CustomSelectComponent
//         key={data.id}
//         // options={uniqueDepartments}
//         value={filters.department}
//         onChange={(e) => setFilters({ ...filters, department: e.target.value })}
//         placeholder="Виберіть відділ"
//         onFilterChange={onFilterChange}
//       />
//    <InputFilter
//       //   options={uniqueName}
//       //    type="text"
//       //  value={filters.name}
//       //   onChange={(e) => setFilters({ ...filters, name: e.target.value })}
//       //   inputStyle="active"
//       //   placeholder="Пошук за прізвищем"
//         //   name="name"
//                 type="text"
//         value={filters.name}
//         onChange={(e) => setFilters({ ...filters, name: e.target.value })}
//       />


//       <InputFilter
//         type="text"
//         value={filters.title}
//         onChange={(e) => setFilters({ ...filters, title: e.target.value })}
//       />
//       <Button onClick={handleSearchClick}>Пошук</Button>
//     </FilterContainer>
//   );
// };

NavMenu.propTypes = {
  setFilter: PropTypes.func,
  data: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default NavMenu;
