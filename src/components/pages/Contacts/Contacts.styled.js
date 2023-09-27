import { styled } from "styled-components";

export const Main = styled.div`
margin: auto;
`;

export const Title = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 600;
text-align: center;
color: var(--accentColor)
`;

export const SectionComponent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 800px;
margin-left: auto;
margin-right: auto;
margin-top:20px;
font-size: 18px;
line-height:150%;
`;

export const SectionImg = styled.img`
width: 500px;
height: auto;
margin-bottom: 30px;
box-shadow: 0px 0px 5px 0px rgba(255, 77, 77, 1);
`
export const Address = styled.address`
border: 1px solid var(--accentColor);
padding: 20px;
border-radius: 10px;

`

export const AddressComponent = styled.span`
font-weight: 600;
margin-right: 20px;
color: var(--accentColor);
`
