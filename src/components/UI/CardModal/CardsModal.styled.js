import styled from "@emotion/styled";

export const Wrapper = styled.div`

`
export const ContainerCard= styled.div`

`
export const Image = styled.img`

`
export const CardWrapper = styled.div`

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

`
export const Title = styled.p`

`
export const About = styled.p`

`
export const Text = styled.p`

`
export const Button = styled.button`

`