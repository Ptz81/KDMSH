// import { Image } from "./Home.styled";
import Carousel from "../UI/Carousel/Carousel.jsx";
import { slides } from "../data/carouselData.json";
import { MainSection, Section, TitleComponent } from "./Home.styled";

export const Home = () => {
  return (
    <MainSection>
      <Section> 

      <Carousel data={slides}/>
        <TitleComponent>
          <svg><text x="2%" y="50%" dy=".15em">Ласкаво просимо у світ музики!</text></svg>
        </TitleComponent>
     
      </Section>
      
    </MainSection>
  );
};
