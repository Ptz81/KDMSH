import { useParams, useNavigate } from "react-router-dom";
import { getDepartmentById } from "../../../api";
import { Container, DecoArrow, DecoWrapper, DepartContainer, Description, ImageTitle, Title, WrapperDepart } from "./DepartmentDetails.styled";
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
         {/* <ImageTitle src={department.photo} alt={department.name}  /> */}
    <ImageTitle
  src={department.photo}
  alt={department.name}
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
        <DepartContainer>
         <Title>
          {department.name} 
        </Title>
        <Description>
          {department.about}
      </Description>  
        </DepartContainer>
       
        
      <DecoWrapper>
        <DecoArrow />
        
      </DecoWrapper>
      </WrapperDepart>
      <Button aria-label="go back" onClick={handleGoBack}>Повернутися назад</Button>
    </Container>
    
  );
};
