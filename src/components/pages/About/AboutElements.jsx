import { AboutList, Link } from "./AboutElements.styled";
// import {PropTypes} from 'prop-types';
// export const AboutElements = ({ onItemClick }) => {
  export const AboutElements = () => {
  return (
    <AboutList>
            <li>
        <button>
          {/* <button onClick={() => onItemClick('school')}></button> */}
          <Link to="school">Про школу</Link>
        </button>
          
        </li>
      <li>
        <button>
          {/* <button onClick={() => onItemClick('management')}></button> */}
          <Link to="management">Керівництво</Link>
        </button>
          
        </li>
      <li>
        <button>
          {/* <button onClick={() => onItemClick('team')}></button> */}
             <Link to="team">Колектив</Link>
        </button>
        </li>
      <li>
        <button>
          {/* <button onClick={() => onItemClick('reviews')}></button> */}
          <Link to="reviews">Умови вступу</Link>
        </button>
        </li>
</AboutList>
       
  );
};
// AboutElements.propTypes = {
//    onItemClick: PropTypes.func.isRequired,
// };