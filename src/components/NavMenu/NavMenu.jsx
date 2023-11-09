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
// const NavMenu = ({ onFilterChange, data }) => {
//   const [originalData, setOriginalData] = useState(data);
//   const [filters, setFilters] = useState({
//     department: "Виберіть відділ",
//     name: "Пошук за прізвищем",
//     title: "Пошук за посадою",
//   });

//   const [uniqueDepartments, setUniqueDepartments] = useState([]);
//   const [uniqueName, setUniqueName] = useState([]);
//   const [uniqueTitle, setUniqueTitle] = useState([]);

//   useEffect(() => {
//     const departments = Array.from(new Set(originalData.map((item) => item.department)));
// const titles = Array.from(new Set(originalData.map((item) => item.title)));
// const names = Array.from(new Set(originalData.map((item) => item.name)));

//     setUniqueDepartments(["Виберіть відділ", ...departments]);
//     setUniqueName(["Пошук за прізвищем", ...names]);
//     setUniqueTitle(["Пошук за посадою", ...titles]);
//   }, [originalData]);

//   const handleSearchClick = () => {
//     const filterOptions = {
//       department: filters.department,
//       name: filters.name !== "Пошук за прізвищем" ? filters.name.toLowerCase() : "",
//       title: filters.title !== "Пошук за посадою" ? filters.title.toLowerCase() : "",
//     };
//     const filteredCards = originalData.filter((card) => {
//       const isDepartmentMatch = filterOptions.department === "Виберіть відділ" || card.department === filters.department;
//       const isNameMatch = filterOptions.name === "" || card.name.toLowerCase().includes(filters.name);
      
//       const isPositionMatch = filterOptions.title === "" || card.title.toLowerCase().includes(filters.title);
      
//       return isDepartmentMatch && isNameMatch && isPositionMatch;
//     });

//     onFilterChange(filteredCards);

//     setFilters({
//       department: "Виберіть відділ",
//       name: "Пошук за прізвищем",
//       title: "Пошук за посадою",
//     });
//   };

//   const handleInputChange = (name, value) => {
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//   };
//   return (
//     <FilterContainer>
//       <CustomSelectComponent
//         key={data.id}
//         options={uniqueDepartments}
//         value={filters.department}
//         onChange={(value) => handleInputChange('department', value)}
//         placeholder="Виберіть відділ"
//         onFilterChange={(value) => handleInputChange('department', value)}
//       />

//       <InputFilter
//         options={uniqueName}
//         // onChange={(e) => setInputValue(e.target.value)}
//         onFilterChange={(value) => handleInputChange('name', value)}
//         inputStyle="active"
//         placeholder="Пошук за прізвищем"
//         name="name"
//       />
//       <InputFilter
//         options={uniqueTitle}
//         // onChange={(e) => setInputValue(e.target.value)}
//         onFilterChange={(value) => handleInputChange('title', value)}
//         inputStyle="active"
//         placeholder="Пошук за посадою"
//         name="title"
//       />
//       <Button style={{ margin: "0px" }}
//         onClick={handleSearchClick}>Пошук</Button>
//     </FilterContainer>
//   );
// };


const NavMenu = ({ onFilterChange, data }) => {
  const [originalData, ] = useState(data);
  const [uniqueDepartments, setUniqueDepartments] = useState([]);
  const [uniqueName, setUniqueName] = useState([]);
  const [uniqueTitle, setUniqueTitle] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = useState("Виберіть відділ");
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  useEffect(() => {
    setSelectedDepartment("Виберіть відділ");
    setInputName("");
    setInputTitle("");
  }, []);

  useEffect(() => {
    const departments = Array.from(new Set(originalData.map((item) => item.department)));
    const titles = Array.from(new Set(originalData.map((item) => item.title)));
    const names = Array.from(new Set(originalData.map((item) => item.name)));

    setUniqueDepartments(["Виберіть відділ", ...departments]);
    setUniqueName(["Пошук за прізвищем", ...names]);
    setUniqueTitle(["Пошук за посадою", ...titles]);
  }, [originalData]);

  const handleSearchClick = () => {
  const filterOptions = {
    department: selectedDepartment.toLowerCase(),
    name: inputName.toLowerCase(),
    title: inputTitle.toLowerCase(),
  };

  const filteredCards = originalData.filter((card) => {
    const isDepartmentMatch = filterOptions.department === "виберіть відділ" || card.department.toLowerCase() === filterOptions.department;
    const isNameMatch = filterOptions.name === "" || card.name.toLowerCase().includes(filterOptions.name);
    const isPositionMatch = filterOptions.title === "" || card.title.toLowerCase().includes(filterOptions.title);

    return isDepartmentMatch && isNameMatch && isPositionMatch;
  });

  onFilterChange(filteredCards);

  setSelectedDepartment("Виберіть відділ");
  setInputName("");
  setInputTitle("");
};


  return (
    <FilterContainer>
      <CustomSelectComponent
        key={data.id}
        options={uniqueDepartments}
        value={selectedDepartment}
        onChange={(value) => setSelectedDepartment(value)}
        placeholder="Виберіть відділ"
        onFilterChange={(value) => setSelectedDepartment(value)}
      />

      <InputFilter
        options={uniqueName}
        value={inputName}
        onFilterChange={(value) => setInputName(value)}
        inputStyle="active"
        placeholder="Пошук за прізвищем"
        name="name"
      />
      <InputFilter
        options={uniqueTitle}
        value={inputTitle}
        onFilterChange={(value) => setInputTitle(value)}
        inputStyle="active"
        placeholder="Пошук за посадою"
        name="title"
      />
      <Button style={{ margin: "0px" }} onClick={handleSearchClick}>Пошук</Button>
    </FilterContainer>
  );
};






NavMenu.propTypes = {
  // setFilter: PropTypes.func,
  data: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default NavMenu;
