import PropTypes from "prop-types";

import { CardWrapper, Experience, TextSpan, TitleSpan } from "./CardsModal.styled.js";
import { Wrapper } from "./CardsModal.styled.js";
import { ContainerCard } from "./CardsModal.styled.js";
import { Image } from "./CardsModal.styled.js";
import { CardIcon } from "./CardsModal.styled.js";
import { Info } from "./CardsModal.styled.js";
import { Name } from "./CardsModal.styled.js";
import { Title } from "./CardsModal.styled.js";
import { About } from "./CardsModal.styled.js";
import { Text } from "./CardsModal.styled.js";
import { Button, ButtonTitle } from "../Button/Button.styled.js";
import { Link } from "react-router-dom";


const CardsModal = ({name, title, img, description, instrument, band, department }) => {
    // const handlePhoneCall = () => {
    // window.location.href = `tel:${phone}`;
    // };
  // const currentYear = new Date().getFullYear();
  //  const yearsOfExperience = currentYear - experience;
  return (
    <Wrapper>
      <ContainerCard>
       {img ? (
            <Image src={img} alt={`photo of ${name}`} />
          ) : (
            <CardIcon
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </CardIcon>
          )}
      </ContainerCard>
      <Info>
        <Name>{name}</Name>
        <Title>{title}:<TitleSpan>{department}</TitleSpan></Title>
        <About>{description}</About>
        <Experience><TextSpan>Інструмент:</TextSpan>{ instrument}</Experience>
        <Text><TextSpan>Колективи:</TextSpan>{band}</Text>
        <CardWrapper>
           <Link to='https://forms.gle/PVcbo8fZEWQrJm4G8' target="_blank">
            <Button>
              <ButtonTitle>Записатися</ButtonTitle>
          </Button>
          </Link>
        </CardWrapper>
         
      </Info>
    </Wrapper>
  );
};

export default CardsModal;

CardsModal.propTypes = {
  id: PropTypes.number, 
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  instrument: PropTypes.string,
  band: PropTypes.string,
  department: PropTypes.string,
};