import { Link } from "react-router-dom";
import { Address, AddressComponent, Main, SectionComponent, SectionImg, Title } from "./Contacts.styled.js";
import map from '../../Images/map.png';


export const Contacts = () => {
  return (
    <Main>
      <Title>Контактна інформація</Title>
      <SectionComponent>
        <>
          <SectionImg src={map} alt="map" width={"500px"} height={"500px"} />
        </>
         
      <Address>
        <ul>
        <li>
          <AddressComponent>Адреса:</AddressComponent> вулиця Зодчих, 30а, <br/>Київ, 03194
        </li>
          <li><AddressComponent>Телефон:</AddressComponent> 
            <Link to="tel:+380934139512" style={{textDecoration:"none", color:'#212121'}}>
              (093) 413-95-12
            </Link>
        </li>
          <li><AddressComponent>Email:</AddressComponent>
            <Link to="mailto:dmsh22@ukr.net" target="_blank" style={{textDecoration:"none",color:'#212121'}}>
            dmsh22@ukr.net 
            </Link>
          
          </li>
        <li>
          <AddressComponent>Розклад роботи:</AddressComponent> <br/> пн-пт: 10.00 - 20.00 <br/> cб: 10.00 - 16.00 <br/> нд: вихідний
        </li>
      </ul>
      </Address>
      </SectionComponent>
     
      
    </Main>
  );
};
