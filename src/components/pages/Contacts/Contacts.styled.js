import { styled } from "styled-components";

export const Main = styled.div`
margin: auto;

`;

export const Title = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 36px;
font-weight: 600;
text-align: center;
color: var(--accentColor)
`;

export const SectionComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 800px;
/* margin-left: auto;
margin-right: auto; */
margin-top:30px;
font-size: 18px;
line-height:150%;
@media screen and (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-start
  }
`;

export const SectionImg = styled.img`
width: 100%;
height: auto;
transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
margin-bottom: 30px;
box-shadow: 0px 0px 5px 0px rgba(255, 77, 77, 1);
@media screen and (min-width: 558px) {
    width: 500px;
  }
  @media screen and (min-width: 1100px) {
    width: 700px;
  }
  &:hover{
  transform: scale(1.1);
}
`
export const Address = styled.address`
/* border: 1px solid var(--accentColor); */
padding: 20px;
font-size: 14px;
border-radius: 10px;
box-sizing: border-box;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

@media screen and (min-width: 558px) {
    width: 500px;
  }
@media screen and (min-width: 1100px) {
    font-size: 18px;
    margin-left: 30px;
    box-shadow: none;

  }
`

export const AddressComponent = styled.span`
font-weight: 600;
margin-right: 20px;

color: var(--accentColor);
`
