// import styled from "@emotion/react";
import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
export const ContainerCard = styled.li`
  position: relative;
  max-width: 250px;
  aspect-ratio: 16/9;
  background-color: var(--base);
  border-radius: 5px;
  /* max-width: 200px; */
  height: 150px;
  flex-grow: 1;
  flex-basis: 200px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #e86969;
  transition: all 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   &:hover {
    transform: scale(1.03);
    /* box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2); */
    background-color: var(--base);
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
  background-color: var(--base);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${ContainerCard}:hover & {
    transform: rotateX(0deg);
    /* transform: scale(1.05); */
  }
`

export const Content = styled.p`
 margin: 5px 0 5px;
  font-size: 12px;
  color: var(--mainColor);
  line-height: 1.4;
`
export const CardTitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--mainColor);
  font-weight: 700;
`
export const CardBtn = styled.button`
  padding: 10px;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  color: white;
  cursor: pointer;
`

export const ImageCard = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`

export const CardIcon = styled.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${ContainerCard}:hover & {
    transform: scale(0);
  }
`;
