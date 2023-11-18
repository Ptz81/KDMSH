import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0;
  position:relative;
`;
export const NavList = styled.ul`
display: flex;
`
export const Header = styled.header`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--accentColor);
  /* background:#e6e6e6; */
  > nav {
    display: flex;
  }
`;
export const LogoSpan = styled.span`
font-size:0px;
font-family: 'Marck Script', cursive;
line-height: 1.5em;
color: var(--semiAccentColor);
@media screen and (min-width: 480px) {
      font-size:12px; 
  }
&:hover{
  color: var(--accentColor);
}
`
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  color: var(--mainColor);
  padding: 2px 4px;
  display: flex;
align-items: center;
&:hover{
  color: var(--accentColor);
}
`;
export const LogoLink = styled(NavLink)`
 text-decoration: none;
 color: inherit;
`
export const LogoContainer = styled.div`
padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  /* color: #3b3937; */
  color: var(--accentColor);
  font-weight: 500;
  margin-left: 20px;
position: relative;
svg{
  fill: var(--accentColor);
}
  &.active {
    color: white;
    /* background-color: #ff4d4d; */
    background-color:var(--accentColor)
  }
`

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  /* color: #3b3937; */
  color: var(--mainColor);
  font-weight: 500;
  margin-left: 20px;
position: relative;
  &.active {
    color: white;
    /* background-color: #ff4d4d; */
    background-color:var(--accentColor)
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  z-index: 1000;
`;


export const StyledHeader = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var();
  border-bottom: 1px solid black;


  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    padding: 20px 100px;
  }
`;

export const NavContainer = styled.nav`
 font-size: 16px;

ul.sub-menus {
    height: auto;
    overflow: hidden;
    width: 140px;
    font-size: 10px;
    line-height: 2;
    /* background: #FFF5ED; */
    background: var(--base);
    position: absolute;
    top:43px;
    z-index: 99;
    display: none;
    border-radius: 10px;
   
  }

  ul.sub-menus li {
    display: block;
    width: 100%;

  }
  ul.sub-menus li:first-child{
    margin-top: 20px;
  }
  ul.sub-menus li:last-child{
    margin-bottom: 20px;
  }

  ul.sub-menus a {
    /* color: #FF4D4D; */
    color: var(--accentColor);
    font-size: 14px;
    margin-left: 10px;
    &.active {
    color: white;
    /* background-color: #ff4d4d; */
  }
  }

  li:hover ul.sub-menus {
    display: block;
  }

  ul.sub-menus a:hover {
    background: var(--lightGrey);
    color: var(--mainColor);
  }
  `