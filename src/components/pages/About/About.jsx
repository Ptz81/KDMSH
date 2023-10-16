// import { Outlet } from "react-router-dom";
// import { AboutElements } from "./AboutElements";
// import { AboutContainer, AboutSection } from "./AboutElements.styled";
import { MainText, MainTitle, SectionComponent } from "../Home.styled";

export const About = () => {
  // const [isContentVisible, setIsContentVisible] = useState(false);
  // const handleMenuItemClick = () => {
  //   setIsContentVisible(true);
  // };
  return (
    // <AboutSection>
    //   <AboutContainer>
    //     {/* <AboutElements onItemClick={handleMenuItemClick} /> */}
    //     <AboutElements/>
    //   </AboutContainer>
    //    {/* {isContentVisible ? null : <Slider />} */}
    //   <Outlet />
    // </AboutSection>
    
    <SectionComponent>
      <MainText>
        <MainTitle>
          Про нас
        </MainTitle>
                Для мешканців Святошинського району працює з 1971 року.
        Школа є державним позашкільним навчальним закладом освіти в галузі
        культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип
        єдності і наступності мистецької освіти; проводить навчально-виховну, методичну,
        просвітницьку роботу.

      </MainText>
    </SectionComponent>
  );
};
