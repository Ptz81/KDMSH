// import { Link } from "react-router-dom";
import { Container, CardWrapper, DepartmentName, CardList, LinkCard, ImageTitle} from "../Departments/DepartmentList.styled";
import PropTypes from "prop-types";
import { CardIcon } from "../UI/Card/Card.styled";


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
            {band.photo ? (
            <ImageTitle src={band.photo} alt={`photo of ${band.name}`} />
          ) : (
            <CardIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </CardIcon>
          )}
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