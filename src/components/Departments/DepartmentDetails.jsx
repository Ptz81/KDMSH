import { useParams } from "react-router-dom";
import { getDepartmentById } from "../../../api";
import { ImageTitle } from "../pages/Home.styled";
import { Container, DecoArrow, DecoWrapper, Description, Title, WrapperDepart } from "./DepartmentDetails.styled";
import { cardsData } from '../data/CardData.json';
import { useEffect, useState } from "react";
import CardList from "../Pagination/CardList";

export const DepartmentDetails = () => {
   const [filteredData, setFilteredData] = useState([]);
const { id } = useParams();
  const department = getDepartmentById(id);
 useEffect(() => {
  const filteredCards = cardsData.filter((card) => card.department === department.name);
  setFilteredData(filteredCards);
}, [department.name]);

  
  return (
    <Container>
      <WrapperDepart>
         <ImageTitle src={department.photo} alt={department.name}  />
   
        <Title>
          {department.name} 
        </Title>
        <Description>
          {department.about}
      </Description>
        
      <DecoWrapper>
        <DecoArrow />
        
      </DecoWrapper>
      </WrapperDepart>
     
<CardList items={filteredData}/>
    </Container>
    
  );
};
