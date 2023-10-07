import styled from "@emotion/styled";

export const FilterContainer = styled.div`
`;

export const List = styled.ul`
  z-index: 2;
  padding: 0 0 40px 0;

  @media screen and (min-width: 778px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;

  }

`;

export const ContainerBtnPagination = styled.div`
  cursor: pointer;
`;