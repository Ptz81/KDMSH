import { CardManage } from "../UI/CardManagement/CardManage.jsx";
import { MainText, MainTitle, SectionComponent } from "./Home.styled";
export const Mission = () => {
  
  return (
    <SectionComponent>
      <MainTitle>Керівний склад</MainTitle>
      <MainText>
        В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають
        значний професійний досвід,гарантують індивідуальний підхід до кожного учня.
        Вони всебічно працюють над розвитком музичної грамотності, техніки гри, виразності та
        інтерпретації для забезпечення найкращих результатів навчання.
        Щорічно в школі навчаються 410 учнів від 5 до 18 років.
      </MainText>
      {/* <ManagementCards data={cardsData}/> */}
      <CardManage/>
    </SectionComponent>
  );
};
