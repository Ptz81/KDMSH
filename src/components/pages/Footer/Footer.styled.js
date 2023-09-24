import styled from "styled-components";

export const Footer = styled.footer`
    position: fixed;
     ${'' /* background-color: #d3ffd3; */}
  color: #3b3937;
  border-top: 1px solid var(--accentColor);
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2px;
  height: auto;
  backdrop-filter: blur(5px);
`;

export const CopyRight = styled.div`
  color: #212121;
  font-size: 10px;
  padding: 25px 50px;
`;