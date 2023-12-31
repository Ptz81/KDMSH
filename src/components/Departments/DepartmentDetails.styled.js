import { styled } from "styled-components";

export const ImageTitle = styled.img`
width: 100%;
height: 200px;
object-fit: contain;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`
export const DepartContainer = styled.div`
display: flex;
margin-left: 10px;
flex-direction: column;
@media screen and (min-width: 778px) {
  margin-left: 20px;
  }

`

export const Title = styled.p`

  color: var(--accentColor);
  font-size: 1.1em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
    @media screen and (min-width: 778px) {
  font-size: 1.5em;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--mainColor);
  @media screen and (min-width: 778px) {
  font-size: 1.2em;
  }
`;
export const Container = styled.div`
margin-bottom: 20px;
margin: auto;
min-height: 700px;
`
export const WrapperDepart = styled.div`
  display: flex;
  position: relative;
  max-width: auto;
  max-height: auto;
  backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  padding: 2em 1.2em;
  margin-top: 12px;
  margin-bottom: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
 background-image: #a6ffa6;
 
 >img{
  width: auto;
  object-fit: contain;
 }
  &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

  &:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
  }
&:hover:before {
  transform: scale(28);
}
&:hover .Description{
    transition: all 0.8s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
&:hover .Title{
  transition: all 0.5s ease-out;
  color: var(--mainColor);
}
@media screen and (max-width: 777px) {
  flex-direction: column;
  }

`;

export const DecoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2em;
  height: 2em;
  overflow: hidden;
  top: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(250,253,45,1) 100%);
  border-radius: 0 4px 0 32px;
`;

export const DecoArrow= styled.div`
   margin-top: -4px;
  margin-right: -4px;
  color: var(--mainColor);
  font-family: courier, sans;
`;

export const DepartmentInfo = styled.div`
font-size: 14px;
margin-left: auto;
    margin-right: auto;
    width: 280px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
> ul{
  font-size: 12px;
}
@media screen and (min-width: 360px) {
  width: auto;
  }

@media screen and (min-width: 778px) {
  font-size: 20px;
  padding: 20px;
  > ul{
  font-size: 16px;
}
  }
  @media screen and (min-width: 1050px) {
  width: 970px;
  }
`;

export const ArticleWrapper = styled.article`
width: 100%;
`