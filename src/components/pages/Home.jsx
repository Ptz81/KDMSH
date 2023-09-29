// import { Image } from "./Home.styled";
import Carousel from "../UI/Carousel/Carousel.jsx";
import { slides } from "../data/carouselData.json";
import { MainSection, Section, TitleComponent } from "./Home.styled";

export const Home = () => {
  return (
    <MainSection>
      <Section> 

      <Carousel data={slides}/>
        <TitleComponent>Жити без музики — це, як дихати без повітря!</TitleComponent>
     
      </Section>
      
    </MainSection>
  );
};
