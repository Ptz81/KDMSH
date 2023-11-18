import styled from "styled-components";

export const StyledContainer = styled.div`
margin-right: 14px;
`
export const StyledMenuIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 999;
  transition: scale 1s ease-out;
  &:hover,
  &:focus {
    scale: calc(1.05);
  }

  @media screen and (min-width: 778px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  opacity: hidden;

  background-color: #fff5ed;
/* opacity: ${({ isShowMenu }) => (isShowMenu ? 1 : 1)}; */
  /* transform: translateY(${({ isShowMenu }) => (isShowMenu ? "0" : "-100%")}); */
  /* transition: opacity 3s ease-out, transform 0.3s ease-out; */
`;