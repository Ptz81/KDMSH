import { Outlet } from "react-router-dom";
import { AboutElements } from "./AboutElements";
import { AboutContainer, AboutSection } from "./AboutElements.styled";


export const About = () => {
  // const [isContentVisible, setIsContentVisible] = useState(false);
  // const handleMenuItemClick = () => {
  //   setIsContentVisible(true);
  // };
  return (
    <AboutSection>
      <AboutContainer>
        {/* <AboutElements onItemClick={handleMenuItemClick} /> */}
        <AboutElements/>
      </AboutContainer>
       {/* {isContentVisible ? null : <Slider />} */}
      <Outlet />
    </AboutSection>
  );
};
