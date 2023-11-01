// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
     width:100%;
    /* margin-bottom: 100px; */
    /* min-height: 700px; */
`;

export const CardWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`;

export const CardList = styled.li`
 text-align: center;
 backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
 cursor:pointer;
 border-radius: 15px;
    width: 320px;
    &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

    @media screen and (min-width: 558px) {
            width: 230px;
        }

  > a {
    text-decoration: none;
    margin-left: auto;
    margin-right:auto;
  }
  > a img {
    margin-top: 10px;
    border: 1px solid var(--border-header);
    width: 100%;
    border-radius: 15px;
      margin-left: auto;
  margin-right: auto;
  }
`;

export const ImageTitle = styled.img`
width: 100%;
height: 140px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const LinkCard = styled(NavLink)`
    display: block;
    max-width: 250px;
    height: 200px;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`

export const DepartmentName = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    /* height: 60px; */
`;
