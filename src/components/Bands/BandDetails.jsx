import { useNavigate, useParams } from "react-router-dom";
import { getBandById } from "../../../api";
import { Container, DecoArrow, DecoWrapper, Description, Title } from "../Departments/DepartmentDetails.styled";
import { ImageTitle } from "./Band.details.js";
import { WrapperDepart } from "./Band.details";
import { Button } from "../UI/Button/Button.styled";
// import { useEffect, useState } from "react";
// import { cardsData } from '../data/CardData.json';

export const BandDetails = () => {
// const [filteredData, setFilteredData] = useState([]);

//  useEffect(() => {
//   const filteredCards = cardsData.filter((card) => card.band === band.name);
//   setFilteredData(filteredCards);
// }, [band.name]);

  const { id } = useParams();
  const band = getBandById(id);
const history = useNavigate(); 
const handleGoBack = () => {
     history(-1); 
  };
  return (
    <Container>
      <WrapperDepart>
         <ImageTitle src={band.photo} alt={band.name}  />
   
        <Title>
          {band.name} 
        </Title>
        <Description>
          {band.about}
      </Description>
        
      <DecoWrapper>
        <DecoArrow />
        
      </DecoWrapper>
      </WrapperDepart>
      <Button onClick={handleGoBack}>Повернутися назад</Button>
    </Container>
    // <main>
    //   <Image src="https://via.placeholder.com/960x240" alt="" />
    //   <div>
    //     <h2>
    //       Band - {band.name} - {id}
    //     </h2>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
    //       sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
    //       a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
    //       atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
    //       elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
    //       praesentium ipsum quos unde voluptatum?
    //     </p>
    //   </div>
    // </main>
  );
};
