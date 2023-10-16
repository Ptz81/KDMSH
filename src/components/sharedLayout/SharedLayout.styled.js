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
margin-left: 10px;
font-family: 'Marck Script', cursive;
line-height: 1.5em;
color: var(--semiAccentColor);
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
  color: #3b3937;
  font-weight: 500;
  margin-left: 20px;
position: relative;
  &.active {
    color: white;
    background-color: #ff4d4d;
  }
`

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #3b3937;
  font-weight: 500;
  margin-left: 20px;
position: relative;
  &.active {
    color: white;
    background-color: #ff4d4d;
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
 

ul.sub-menus {
    height: auto;
    overflow: hidden;
    width: 170px;
    background: #FFF5ED;
    position: absolute;
    z-index: 99;
    display: none;
  }

  ul.sub-menus li {
    display: block;
    width: 100%;
  }

  ul.sub-menus a {
    color: #FF4D4D;
    font-size: 16px;
  }

  li:hover ul.sub-menus {
    display: block;
  }

  ul.sub-menus a:hover {
    background: #f2f2f2;
    color: #212121;
  }
  `