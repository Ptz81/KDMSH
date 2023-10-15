import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LiItem = styled.li`
list-style: none;
`

export const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  z-index: 999;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  white-space: nowrap;

  color: var(--mainColor);
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 12px;
  transition: backgroundColor 0.5s ease-out;

  &:hover,   &:active  {
    /* background-color: var(--subColor); */
    color: var(--accentColor);
    font-weight: 600;
  }
`;