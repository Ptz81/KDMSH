import { Link } from "react-router-dom";
import { MainSection } from "./Home.styled";

export const Contacts = () => {
  return (
    <MainSection>
      <h1>Контактна інформація</h1>
      <img src="https://via.placeholder.com/240x240" alt="" />
      <address>
        <ul>
        <li>
          Адреса: вулиця Зодчих, 30а, Київ, 03194
        </li>
          <li>Телефон: 
            <Link to="tel:+380934139512">
              (093) 413-95-12
            </Link>
        </li>
          <li>Email: 
            <Link to="mailto:dmsh22@ukr.net" target="_blank">
            dmsh22@ukr.net 
            </Link>
          
          </li>
        <li>
          Розклад роботи: <br/> пн-пт: 10.00 - 20.00 <br/> cб: 10.00 - 16.00 <br/> нд: вихідний
        </li>
      </ul>
      </address>
      
    </MainSection>
  );
};
