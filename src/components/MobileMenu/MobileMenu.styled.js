import styled from "styled-components";

export const StyledContaiber = styled.div`
margin-right: 14px;
`
export const StyledMenuIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: scale 0.5s ease-out;
  &:hover,
  &:focus {
    scale: calc(1.05);
  }

  @media screen and (min-width: 768px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 85px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  background-color: #fff5ed;
`;