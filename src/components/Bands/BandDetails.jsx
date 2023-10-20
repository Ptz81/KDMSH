import { useNavigate, useParams } from "react-router-dom";
import { getBandById } from "../../../api";
import { Container, DecoArrow, DecoWrapper, Description, Title } from "../Departments/DepartmentDetails.styled";
import { ImageTitle } from "./Band.details.js";
import { WrapperDepart } from "./Band.details";
import { Button } from "../UI/Button/Button.styled";
// import { CardIcon } from "../UI/Card/Card.styled";

export const BandDetails = () => {
  const { id } = useParams();
  const band = getBandById(id);
const history = useNavigate(); 
const handleGoBack = () => {
     history(-1); 
};
//   function handleImageError(e) {
//   e.target.style.display = 'none'; 
//      const placeholderDiv = document.createElement('div');
//   placeholderDiv.style.width = '100%';
//   placeholderDiv.style.height = '400px';
//   placeholderDiv.style.backgroundColor = 'lightgrey';

  
//   e.target.parentNode.appendChild(placeholderDiv);
// }
  return (
    <Container>
      <WrapperDepart>
        <ImageTitle
  src={band.photo}
  alt={band.name}
  onError={(e) => {
    e.target.style.display = 'none';
    const placeholderDiv = document.createElement('div');
    placeholderDiv.style.width = '100%';
    placeholderDiv.style.height = '200px';
    placeholderDiv.style.border = '1px solid var(--accentColor)'
    placeholderDiv.style.backgroundColor = 'linear-gradient(to right, #fff5ed 0 90%)';
    e.target.parentNode.insertBefore(placeholderDiv, e.target);
  }}
/>
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
   
  );
};
