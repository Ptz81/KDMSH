import styled from "styled-components"

export const ContainerCard = styled.div`
  position: relative;
  width: 350px;
  aspect-ratio: 16/9;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`
export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${ContainerCard}:hover & {
    transform: rotateX(0deg);
  }
`

export const Content = styled.p`
 margin: 10px 0 10px;
  font-size: 12px;
  color: #777;
  line-height: 1.4;
`
export const CardTitle = styled.p`
  margin: 0;
  font-size: 20px;
  color: #333;
  font-weight: 700;
`
export const CardBtn = styled.button`
  padding: 15px;
  border-radius: 8px;
  background: #777;
  border: none;
  color: white;
`

export const ImageCard = styled.img`

  width: 100%;
  height: 100%;

`

export const CardIcon = styled.svg`
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${ContainerCard}:hover & {
    transform: scale(0);
  }
`;
