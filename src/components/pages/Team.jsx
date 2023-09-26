import { MainText, MainTitle, SectionComponent } from "./Home.styled";

export const Team = () => {
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
      <ul>
        <li>
          <b>Директор</b> - Герасимчук Любов Василівна
        </li>
        <li>
          <b>Sales</b> - Darius Marianne
        </li>
        <li>
          <b>Product</b> - Ségdae Jean-Pierre
        </li>
        <li>
          <b>Marketing</b> - Melina Theotimos
        </li>
        <li>
          <b>Engineering</b> - Gregor Ramadhani
        </li>
      </ul>
    </SectionComponent>
  );
};
