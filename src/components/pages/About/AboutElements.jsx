import { AboutList, Link } from "./AboutElements.styled";
import {PropTypes} from 'prop-types';
export const AboutElements = ({ onItemClick }) => {
  return (
    <AboutList>
            <li>
        <button onClick={() => onItemClick('school')}>
          <Link to="school">Про школу</Link>
        </button>
          
        </li>
      <li>
        <button onClick={() => onItemClick('management')}>
          <Link to="management">Керівництво</Link>
        </button>
          
        </li>
      <li>
        <button onClick={() => onItemClick('team')}>
             <Link to="team">Колектив</Link>
        </button>
        </li>
      <li>
        <button onClick={() => onItemClick('reviews')}>
          <Link to="reviews">Умови вступу</Link>
        </button>
        </li>
</AboutList>
       
  );
};
AboutElements.propTypes = {
   onItemClick: PropTypes.func.isRequired,
};