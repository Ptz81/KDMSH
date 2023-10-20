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
          <svg width="100%" height="100%"><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">Ласкаво просимо у світ музики!</text></svg>
        </TitleComponent>
     
      </Section>
      
    </MainSection>
  );
};
