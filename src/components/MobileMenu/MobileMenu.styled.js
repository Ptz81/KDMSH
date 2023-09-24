import styled from "styled-components";


export const StyledMenuIcon = styled.img`
  margin-left: 14px;
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
  top: 72px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  background-color: rgba(255, 255, 255, 0.7);
`;