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
          {department.name} - {id}
        </Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
      </Description>
      <DecoWrapper>
      <DecoArrow/>
      </DecoWrapper>

    </Container>
  );
};
