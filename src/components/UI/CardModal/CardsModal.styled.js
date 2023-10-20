import styled from "@emotion/styled";

export const Wrapper = styled.div`
font-size: inherit;
margin-bottom:20px;
margin-top:20px
`
export const ContainerCard= styled.div`
width: 100%;
/* margin-bottom: 20px; */
border-radius: 20px;
margin-top: 10px;
@media screen and (min-width: 768px) {
    margin-bottom: 30px;
    margin-top: 20px;
  }
`
export const Image = styled.img`
object-fit: cover;
width: 100%;
height: 200px;
border-radius: 10px;
@media screen and (min-width: 768px) {
    height: 400px;
    border-radius: 20px;
  }
`
export const CardWrapper = styled.div`
text-align: center;

`
export const CardIcon = styled.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${ContainerCard}:hover & {
    transform: scale(0);
  }
`;
export const Info = styled.div`
font-size: 14px;
@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`
export const Name = styled.p`
font-weight: 600;
text-transform: uppercase;
font-size: 4vw;
margin-bottom: 10px;

@media screen and (min-width: 768px) {
      font-size: 36px; 
      text-transform: uppercase;
      margin-bottom: 15px;
  }
`
export const Title = styled.p`
/* text-transform: uppercase; */
font-size: 3vw;
/* color: var(--accentColor); */
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid var(--accentColor);

@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`

export const TitleSpan = styled.span`
margin-left: 10px;
color: var(--accentColor);

`

export const About = styled.p`
/* font-size: 14px; */
`
export const Text = styled.p`
margin-bottom: 20px;
/* font-size: 14px; */
`
export const TextSpan = styled.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
/* font-size: 14px; */
@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`
export const Button = styled.button`

`
export const Experience = styled.p`
/* font-size: 14px; */
`