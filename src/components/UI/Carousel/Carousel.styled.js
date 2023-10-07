import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
`;

export const Slide = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
  object-fit:cover;
`;

export const Arrow = styled.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`;

export const LeftArrow = styled(Arrow)`
  left: 1rem;
`;

export const RightArrow = styled(Arrow)`
  right: 0rem;
`;

export const Indicators = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

export const Indicator = styled.button`
  background-color: ${(props) => (props.active ? "white" : "grey")};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;