import styled from '@emotion/styled';


export const Btn = styled.button`
  color: var(--mainColor);
  text-align: center;
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${props =>
    props.active ? 'rgba(64, 112, 205, 0.50)' : 'transparent'};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  @media screen and (min-width: 778px) {
font-size: 20px;
  }
`;
export const Number = styled.p`
  // position: absolute;
  // z-index: 2;
`;

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  > li{
    list-style: none;
    > a{
      text-decoration: none;
    }
  }
  /* @media screen and (min-width: 778px) {
gap: 24px;
  } */
  
`;

export const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
