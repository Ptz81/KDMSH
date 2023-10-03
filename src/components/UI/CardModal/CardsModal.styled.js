import styled from "@emotion/styled";

export const Wrapper = styled.div`

`
export const ContainerCard= styled.div`
width: 100%;
margin-bottom: 30px;
`
export const Image = styled.img`
object-fit: contain;
width: 100%;
min-height: 500px;
border-radius: 20px;
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

`
export const Name = styled.p`
font-weight: 600;
text-transform: uppercase;
font-size: 5vw;
margin-bottom: 15px;

@media screen and (min-width: 487px) {
      font-size: 36px; 
  }
`
export const Title = styled.p`
text-transform: uppercase;
font-size: 4vw;
color: var(--accentColor);
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid var(--accentColor);
@media screen and (min-width: 487px) {
      font-size: 24px; 
  }
`
export const About = styled.p`

`
export const Text = styled.p`
margin-bottom: 20px;
`
export const TextSpan = styled.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
`
export const Button = styled.button`

`
export const Experience = styled.p`
/* color:var(--accentColor); */
`