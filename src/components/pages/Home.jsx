// import { Image } from "./Home.styled";
import Slider from "../UI/Slider/Slider.jsx";
import { MainSection, Section, TitleComponent } from "./Home.styled";

export const Home = () => {
  return (
    <MainSection>
      <Section>
        <TitleComponent>Жити без музики — це, як дихати без повітря</TitleComponent>
      <Slider/>
      </Section>
      
    </MainSection>
  );
};
