import { Outlet } from "react-router-dom";
import { AboutElements } from "./AboutElements";
import { AboutContainer } from "./AboutElements.styled";
import { MainSection } from "../Home.styled";

export const About = () => {
  return (
    <MainSection>
      <AboutContainer>
        <AboutElements/>
      </AboutContainer>
          <Outlet />
    </MainSection>
  );
};
