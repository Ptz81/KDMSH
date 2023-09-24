import { useParams } from "react-router-dom";
import { getDepartmentById } from "../../../api";
import { ImageTitle } from "../pages/Home.styled";
import { Container, DecoArrow, DecoWrapper, Description, Title } from "./DepartmentDetails.styled";

export const DepartmentDetails = () => {
  const { id } = useParams();
  const department = getDepartmentById(id);
  return (
    <Container>
      <ImageTitle src={department.photo} alt={department.name}  />
   
        <Title>
          {department.name} 
        </Title>
        <Description>
          {department.about}
      </Description>
      <DecoWrapper>
      <DecoArrow/>
      </DecoWrapper>

    </Container>
  );
};
