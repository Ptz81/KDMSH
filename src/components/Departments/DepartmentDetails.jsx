import { useParams, useNavigate } from "react-router-dom";
import { getDepartmentById } from "../../../api";
import { ImageTitle } from "../pages/Home.styled";
import { Container, DecoArrow, DecoWrapper, Description, Title, WrapperDepart } from "./DepartmentDetails.styled";
import { Button } from "../UI/Button/Button.styled";

export const DepartmentDetails = () => {
const { id } = useParams();
  const department = getDepartmentById(id);
  const history = useNavigate(); 
const handleGoBack = () => {
     history(-1); 
  };
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
      <Button onClick={handleGoBack}>Повернутися назад</Button>
    </Container>
    
  );
};
