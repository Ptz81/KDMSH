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
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  
  &:hover,
  &:focus{
    
    transform: translateY(-2px);
  }
`;

