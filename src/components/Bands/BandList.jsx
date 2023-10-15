// import { Link } from "react-router-dom";
import { Container, CardWrapper, DepartmentName, CardList, LinkCard, ImageTitle} from "../Departments/DepartmentList.styled";
import PropTypes from "prop-types";


export const BandList = ({ bands }) => {
  return (
    // <Container>
    //   {bands.map((band) => (
    //     <CardWrapper key={band.id}>
    //       <Link to={`${band.id}`}>
    //         <Image src="https://via.placeholder.com/200x100" alt="" />
    //         <DepartmentName>{band.name}</DepartmentName>
    //       </Link>
    //     </CardWrapper>
    //   ))}
    // </Container>
      <Container> 
      <CardWrapper>
      {bands.map((band) => (
        
        <CardList key={band.id}>
          <LinkCard to={`${band.id}`}>
            <ImageTitle src={band.photo} alt={band.name} />
            <DepartmentName> 
              {band.name}
            </DepartmentName>
           </LinkCard>
        </CardList>
      ))}
      </CardWrapper>
    </Container>
  );
};
BandList.propTypes = {
  bands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};