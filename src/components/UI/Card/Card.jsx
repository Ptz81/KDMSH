// import { useEffect, useState } from "react";
// import { Card, CardBtn, CardIcon, CardTitle, ContainerCard, Content, ImageCard, Wrapper} from "./Card.styled";
// import Modal from "../../Modal/Modal.jsx";
// import CardsModal from "../CardModal/CardsModal.jsx";
// import PropTypes from "prop-types";
// import { cardsData } from '../../data/CardData.json';
// export const Cards = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCardData, setSelectedCardData] = useState(null);

//   const handleCardClick = (cardData) => {
//     setSelectedCardData(cardData);
//   };

//   const handleToggle = (cardData) => {
//     setSelectedCardData(cardData);
//     setIsOpen(!isOpen);
//     handleCardClick(cardData);
//   };

//   const handleClickOutside = (event) => {
//     if (Wrapper.current && !Wrapper.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape" && isOpen) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <Wrapper>
//       {cardsData.map((card, index) => (
//         <ContainerCard key={index}>
//           {card.url ? (
//             <ImageCard src={card.url} alt={`photo of ${card.name}`} />
//           ) : (
//             <CardIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
//             </CardIcon>
//           )}
//           <Card>
//             <CardTitle>{card.name}</CardTitle>
//             <Content>{card.title}</Content>
//             <CardBtn onClick={() => handleToggle(card)}>Детальніше</CardBtn>
//           </Card>
//         </ContainerCard>
//       ))}
//       {isOpen && selectedCardData && (
//         <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
//            <CardsModal
//             //  id={selectedCardData.id}
//             name={selectedCardData.name}
//             title={selectedCardData.title}
//             description={selectedCardData.description}
//             phone={selectedCardData.phone}
//             img={selectedCardData.url}
//             experience={selectedCardData.experience}
//             band={selectedCardData.band}
//             department={selectedCardData.department}
//               />
//         </Modal>
//       )}
//     </Wrapper>
//   );
// };

// Cards.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object),
//   onCardClick: PropTypes.func,
// };



// import { useEffect, useState } from "react";
// import { Card, CardBtn, CardIcon, CardTitle, ContainerCard, Content, ImageCard, Wrapper} from "./Card.styled";
// import Modal from "../../Modal/Modal.jsx";
// import CardsModal from "../CardModal/CardsModal";
// import PropTypes from "prop-types";
// import { cardsData } from '../../data/CardData.json';

// export const Cards = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCardData, setSelectedCardData] = useState(null);

//   const handleCardClick = (cardData) => {
//     setSelectedCardData(cardData);
//     setIsOpen(!isOpen);
//   };

//   const handleToggle = (cardData, index) => {
//     setSelectedCardData(cardData);
//     setIsOpen(!isOpen);
//     handleCardClick(cardData, index);
//   };

//    const handleClickOutside = (event) => {
//     if (Wrapper.current && !Wrapper.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape" && isOpen) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <Wrapper>
//       {cardsData.map((card, index) => (
//         <ContainerCard key={index}>
//           {card.url ? (
//             <ImageCard src={card.url} alt={`photo of ${card.name}`} />
//           ) : (
//             <CardIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
//             </CardIcon>
//           )}
//           <Card>
//             <CardTitle>{card.name}</CardTitle>
//             <Content>{card.title}</Content>
//             <CardBtn onClick={() => handleToggle(card, index)}>Детальніше</CardBtn>
//           </Card>
//         </ContainerCard>
//       ))}
//       {isOpen && selectedCardData && (
//         <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
//            <CardsModal
//             //  id={selectedCardData.id}
//             name={selectedCardData.name}
//             title={selectedCardData.title}
//             description={selectedCardData.description}
//             phone={selectedCardData.phone}
//             img={selectedCardData.url}
//             experience={selectedCardData.experience}
//             band={selectedCardData.band}
//             department={selectedCardData.department}
//               />
//         </Modal>
//       )}
//     </Wrapper>
//   );
// };

// Cards.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object),
//   onCardClick: PropTypes.func,
// };




// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Card, CardBtn, CardIcon, CardTitle, ContainerCard, Content, ImageCard, Wrapper } from './Card.styled';
// import Modal from '../../Modal/Modal.jsx';
// import CardsModal from '../CardModal/CardsModal';
// import { cardsData } from '../../data/CardData.json';

// export const Cards = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCardData, setSelectedCardData] = useState(null);

//   const handleCardClick = (cardData) => {
//     setSelectedCardData(cardData);
//     setIsOpen(!isOpen);
//   };

//   const handleToggle = (cardData, index) => {
//     setSelectedCardData(cardData);
//     setIsOpen(!isOpen);
//     handleCardClick(cardData, index);
//   };

//   const handleClickOutside = (event) => {
//     if (Wrapper.current && !Wrapper.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape' && isOpen) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <Wrapper>
//       {cardsData.map((card, index) => (
//         <ContainerCard key={index}>
//           {card.url ? (
//             <ImageCard src={card.url} alt={`photo of ${card.name}`} />
//           ) : (
//             <CardIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
//             </CardIcon>
//           )}
//           <Card>
//             <CardTitle>{card.name}</CardTitle>
//             <Content>{card.title}</Content>
//             <CardBtn onClick={() => handleToggle(card, index)}>Детальніше</CardBtn>
//           </Card>
//         </ContainerCard>
//       ))}
//       {isOpen && selectedCardData && (
//         <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
//           <CardsModal
//             name={selectedCardData.name}
//             title={selectedCardData.title}
//             description={selectedCardData.description}
//             phone={selectedCardData.phone}
//             img={selectedCardData.url}
//             experience={selectedCardData.experience}
//             band={selectedCardData.band}
//             department={selectedCardData.department}
//           />
//         </Modal>
//       )}
//     </Wrapper>
//   );
// };

// Cards.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object),
//   onCardClick: PropTypes.func,
// };

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBtn,
  CardIcon,
  CardTitle,
  ContainerCard,
  Content,
  ImageCard,
  Wrapper,
} from "./Card.styled";
import Modal from "../../Modal/Modal.jsx";
import CardsModal from "../CardModal/CardsModal";
// import { cardsData } from "../../data/CardData.json";

const Cards = ({ data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleToggle = (cardData) => {
    setSelectedCardData(cardData);
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (Wrapper.current && !Wrapper.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Wrapper>
      {data.map((card, index) => (
        <ContainerCard key={index}>
          {card.url ? (
            <ImageCard src={card.url} alt={`photo of ${card.name}`} />
          ) : (
            <CardIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
            </CardIcon>
          )}
          <Card>
            <CardTitle>{card.name}</CardTitle>
            <Content>{card.title}</Content>
            <CardBtn onClick={() => handleToggle(card)}>Детальніше</CardBtn>
          </Card>
        </ContainerCard>
      ))}
      {isOpen && selectedCardData && (
        <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
          <CardsModal
            name={selectedCardData.name}
            title={selectedCardData.title}
            description={selectedCardData.description}
            phone={selectedCardData.phone}
            img={selectedCardData.url}
            experience={selectedCardData.experience}
            band={selectedCardData.band}
            department={selectedCardData.department}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

Cards.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Cards;
