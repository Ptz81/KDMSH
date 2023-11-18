import { NavLink } from "react-router-dom";
import { styled } from "styled-components";


export const SocialContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`;

export const SocialTitle = styled.p`
  color: var(--mainColor);
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
  @media screen and (min-width: 778px) {
margin-bottom: 10px;
font-size: 16px;
  }
`;

export const Link = styled(NavLink)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  scale: 1;
  &:hover,
  &:focus{
    transform: translateY(-2px);
  }
`;

