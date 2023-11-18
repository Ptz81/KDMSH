import styled from "styled-components";

export const Footer = styled.footer`
    position: relative;
     ${'' /* background-color: #d3ffd3; */}
  color: var(--accentColor);
  border-top: 1px solid var(--accentColor);
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2px;
  height: auto;
  backdrop-filter: blur(5px);
  @media screen and (max-width: 400px) {
      flex-direction: column;
  }
`;

export const CopyRight = styled.div`
  color: #212121;
  font-size: 10px;
  padding: 10px 20px;

`;