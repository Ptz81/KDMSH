// import { Cards } from "../UI/Card/Card";
import { MainText, MainTitle, SectionComponent } from "./Home.styled";
// import {cardsData } from '../data/CardData.json'
// import { useState } from "react";
// import { Card } from "../UI/Card/Card.styled";
import { Cards as TeamCards } from "../UI/Card/Card.jsx";
export const Team = () => {
  // const [selectedCardData, setSelectedCardData] = useState(null);
  //  const handleCardClick = (cardData) => {
  //   setSelectedCardData(cardData);
  // };
  return (
    <SectionComponent>
      <MainTitle>
        Викладацький склад
      </MainTitle>
      <MainText>
        В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають
        значний професійний досвід,гарантують індивідуальний підхід до кожного учня.
        Вони всебічно працюють над розвитком музичної грамотності, техніки гри, виразності та
        інтерпретації для забезпечення найкращих результатів навчання.
        Щорічно в школі навчаються 410 учнів з 5 до 18 років.
      </MainText>
      {/* <TeamCards data={cardsData} onCardClick={handleCardClick} /> */}
      <TeamCards/>
       {/* {selectedCardData && (
        <Card
          name={selectedCardData.name}
          title={selectedCardData.title}
          description={selectedCardData.description}
          phone={selectedCardData.phone}
          img={selectedCardData.url}
          experience={selectedCardData.experience}
          band={selectedCardData.band}
          department={selectedCardData.department}
        />
      )} */}
    </SectionComponent>
  );
};
