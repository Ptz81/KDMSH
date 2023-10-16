import { CardList, CardWrapper, Container, DepartmentName, ImageTitle, LinkCard} from "./DepartmentList.styled";
import PropTypes from "prop-types";
export const DepartmentList = ({ departments }) => {
  return (
    <Container> 
      <CardWrapper>
      {departments.map((department) => (
        <CardList key={department.id}>
          <LinkCard to={`${department.id}`}>
            <ImageTitle src={department.photo} alt={department.name} />
            <DepartmentName>
              {department.name}
            </DepartmentName>
           </LinkCard>
        </CardList>
      ))}
      </CardWrapper>
    </Container>
  );
};
DepartmentList.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};