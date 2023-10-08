import { AboutList, Link } from "./AboutElements.styled";

  export const AboutElements = () => {
  return (
    <AboutList>
            <li>
        <button>

          <Link to="school">Про школу</Link>
        </button>
          
        </li>
      <li>
        <button>

          <Link to="management">Керівництво</Link>
        </button>
          
        </li>
      <li>
        <button>

             <Link to="team/1">Колектив</Link>
        </button>
        </li>
      <li>
        <button>

          <Link to="reviews">Умови вступу</Link>
        </button>
        </li>
</AboutList>
       
  );
};
