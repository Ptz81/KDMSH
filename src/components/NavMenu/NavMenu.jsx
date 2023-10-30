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

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
  }
`;

const NavMenu = ({ setFilteredCards, data }) => {
  const [department, setDepartment] = useState("Виберіть відділ");
  const [uniqueDepartments, setUniqueDepartments] = useState([]);
  const [uniqueName, setUniqueName] = useState([]);
  const [uniquePosition, setUniquePosition] = useState([]);

  useEffect(() => {
    const departments = Array.from(
      new Set(data.map((item) => item.department))
    );
    const positions = Array.from(
      new Set(data.map((item) => item.title))
    );
    const names = Array.from(new Set(data.map((item) => item.name))
    );
    setUniqueDepartments(["Виберіть відділ", ...departments]);
    setUniqueName(["Пошук за прізвищем", ...names]);
    setUniquePosition(["Пошук за посадою", ...positions]);
  }, [data]);

  const handleSearchClick = () => {
    const filteredCards = data.filter((card) => {
      const isDepartmentMatch = department === "Виберіть відділ" || card.department === department;
      const isNameMatch = uniqueName.includes(card.name);
      const isPositionMatch = uniquePosition.includes(card.title);

      return isDepartmentMatch && isNameMatch && isPositionMatch;
    });

    setFilteredCards(filteredCards);
  };

  return (
    <FilterContainer>
      <CustomSelectComponent
        key={data.id}
        options={uniqueDepartments}
        value={department}
        onChange={(value) => setDepartment(value)}
        placeholder="Виберіть відділ"
      />

      {/* <div style={{ display: "flex", alignItems: "center", marginLeft: "18px" }}> */}
        <InputFilter
          options={uniqueName}
          inputStyle="active"
          placeholder="Пошук за прізвищем"
          name="nameFilter"
        />
        <InputFilter
          options={uniquePosition}
          inputStyle="active"
          placeholder="Пошук за посадою"
          name="positionFilter"
        />
      {/* </div> */}
      <Button style={{ margin: "0px" }} onClick={handleSearchClick}>Пошук</Button>
    </FilterContainer>
  );
};

NavMenu.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired, 
};

export default NavMenu;

