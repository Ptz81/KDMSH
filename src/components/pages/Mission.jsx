import { Cards } from "../UI/Card/Card";
import { MainText, MainTitle, SectionComponent } from "./Home.styled";
import {cardsData } from '../data/ManagementCard.json'
export const Mission = () => {
  return (
    <SectionComponent>
      <MainTitle>Керівний склад</MainTitle>
      <MainText>
        В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають
        значний професійний досвід,гарантують індивідуальний підхід до кожного учня.
      </MainText>
      <Cards data={cardsData}/>
    </SectionComponent>
  );
};
