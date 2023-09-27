import { Outlet } from "react-router-dom";
import { AboutElements } from "./AboutElements";
import { AboutContainer } from "./AboutElements.styled";
import { MainSection } from "../Home.styled";
// import Slider from "../../UI/Slider/Slider";
// import { useState } from "react";

export const About = () => {
  // const [isContentVisible, setIsContentVisible] = useState(false);
  // const handleMenuItemClick = () => {
  //   setIsContentVisible(true);
  // };
  return (
    <MainSection>
      <AboutContainer>
        {/* <AboutElements onItemClick={handleMenuItemClick} /> */}
        <AboutElements/>
      </AboutContainer>
       {/* {isContentVisible ? null : <Slider />} */}
      <Outlet />
    </MainSection>
  );
};
