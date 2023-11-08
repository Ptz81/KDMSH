import { useEffect, useState } from 'react';
import Carousel from '../UI/Carousel/Carousel.jsx';
import { slides } from '../data/carouselData.json';
import { ArticleText, HomeComponent, Section, TitleComponent } from './Home.styled';

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const fontSize = windowWidth >= 778 ? "24px" : "36px";
  
  return (
    <Section>
      {windowWidth >= 778 ? (
        <>
          <Carousel data={slides} />
          <TitleComponent>
          <svg width="100%" height="100%">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize}
            >
              Запрошуємо вас у світ музики!
            </text>
          </svg>
        </TitleComponent>
        </>
        
        
      ) : (
          <HomeComponent>
          <TitleComponent>
          <svg width="100%" height="100%">
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize}
            >
              Вас вітає Київська музична школа №22!
            </text>
          </svg>
            </TitleComponent>
            <ArticleText>
              Для мешканців Святошинського району працює з 1971 року.
              Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу.
            </ArticleText>
            <ArticleText>
              Учні і викладачі школи є активними учасниками концертного життя не лише Києва, де виступають в Національній філармонії України в проектах КДФ, музеях, бібліотеках, в концертних залах на сценах міста, але й відомі в багатьох містах України та за її межами. Вони мають численні нагороди лауреатів конкурсів, фестивалів у Білорусі, Чехії, Угорщині, Чорногорії, Грузії, Болгарії, Італії, Іспанії, Німеччині, Словенії, Польщі, Канаді, Швеції, Греції та ін.
            </ArticleText>
              </HomeComponent>
        
      )}
    </Section>
  );
};
