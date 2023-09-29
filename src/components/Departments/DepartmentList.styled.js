// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
   padding: 0px 15px;
    ${'' /* marginRight: auto;
    marginLeft: auto; */}
    width:100%;
    margin-bottom: 100px;
    
`;

export const CardWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    
`;

export const CardList = styled.li`
 text-align: center;
 backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
 cursor:pointer;
 border-radius: 15px;
    width: 400px;
    &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

    @media screen and (min-width: 558px) {
            width: 230px;
        }

  > a {
    text-decoration: none;
  }
  > a img {
    margin: 10px;
    border: 1px solid var(--border-header);
    width: 80%;
    border-radius: 15px;
      margin-left: auto;
  margin-right: auto;
${'' /* 
    @media screen and (min-width:768px) and (max-width:1199px) {
        flex-grow: 1;
    } */}
  }
`;

export const LinkCard = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`

export const DepartmentName = styled.p`
    font-weight: 700;
    font-size: 13px;
    line-height: 2.0;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 0;
    margin-bottom: 4px;
    height: 55px;
`;
