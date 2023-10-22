import { Outlet } from "react-router-dom";
import { Container, Header, Link, StyledHeader, LogoLink, LogoSpan, NavList, NavContainer, LogoContainer } from "./SharedLayout.styled.js";
// import { GiGClef } from "react-icons/gi";
// import { IconContext } from "react-icons";
import { FooterPage } from "../pages/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import MenuForMobile from "../MobileMenu/MobileMenu.jsx";
import logo from '../Images/logo.svg';
// import { MainSection } from "../pages/Home.styled.js";
// import { SubmenuItem } from "./Submenu.jsx";
// import {MobileMenu} from '../MobileMenu/MobileMenu.jsx'

export const SharedLayout = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const iconLogo = logo;
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        <StyledHeader style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}/>;
      } else {
        <StyledHeader style={{ backgroundColor: "rgb(255, 255, 255)" }}/>;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 778) {
        setIsMobileMenuVisible(true);
      } else {
        setIsMobileMenuVisible(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <Header>
        <LogoLink to="/" end>
        <LogoContainer>
        {/* <IconContext.Provider value={{ color: "#ff4d4d", size: '1.5em', className: "global-class-name" }}>
        <span role="img" aria-label="music icon">
        <GiGClef/>
            </span>{""}  
          </IconContext.Provider> */}
            <img src={iconLogo} alt="logo"/>
            <LogoSpan>КДМШ №22</LogoSpan>
          </LogoContainer>
        </LogoLink>
        {isMobileMenuVisible ? (
        <>
          <MenuForMobile/>
        </>
      ) : (
            <NavContainer>
              <NavList>
                <li>
                  <Link to="/" end>
            Головна
          </Link>
                </li>
                <li>
            <Link to="/about">Про нас </Link>
                <ul className="sub-menus">
            <li>
              <Link to="management">Дирекція</Link>
            </li>
            <li>
              <Link to="team/1">Викладачі</Link>
            </li>
            <li>
             <Link to="reviews">Умови вступу</Link>
            </li>
          </ul>
         
                </li>
                <li>
             <Link to="/departments">Відділи</Link>     
               </li>
                <li>
                <Link to="/bands">Колективи</Link>   
          </li>
                <li>
                <Link to="/contacts">Контакти</Link>  
         </li>
          
              </NavList>
          
            </NavContainer>
            )}
      </Header>
       <Outlet /> 
      <FooterPage/>
    </Container>
  );
};
