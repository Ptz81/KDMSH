import { Link } from "react-router-dom";
import { Main, SectionComponent, SectionImg, Title } from "./Contacts.styled.js";

export const Contacts = () => {
  return (
    <Main>
      <Title>Контактна інформація</Title>
      <SectionComponent>
        <>
          <SectionImg src="https://via.placeholder.com/240x240" alt="map" />
        </>
         
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
      </SectionComponent>
     
      
    </Main>
  );
};
