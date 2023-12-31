import styled from "styled-components";


export const CardDescription = styled.div`
 display: flex;
  position: absolute;
  gap: 0.3em;
  flex-direction: column;
  background-color: var(--base);
  color: var(--mainColor);
  height: 40%;
   width: 100%;
  bottom: 0;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  line-height: normal;
  padding-top: 10px;
  /* padding: 1rem; */
`
export const IconCard = styled.svg`
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const CardContainer = styled.div`
  height: 220px;
 max-width: 180px;
 margin-bottom: 20px;

  flex-grow: 1;
  flex-basis: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 2px 1px var(--accentColor);
  overflow: hidden;

  &:hover ${CardDescription} {
    transform: translateY(100%);
    opacity: 0;
  }
`

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: var(--base);
  /* background: linear-gradient(to top, #0a3394, #4286f4); */
`


export const CardTitle = styled.p`
font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
`
export const CardText = styled.p`
font-size: 0.7rem;
  line-height: 100%;
  text-align: center;
`