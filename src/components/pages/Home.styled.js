import { styled } from "styled-components";

export const Image = styled.img`
 max-width: 100%;
 height: auto;
`;
export const Section = styled.section`
margin-left: auto;
margin-right: auto;
min-height: 700px;
`

export const ImageTitle = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const TitleComponent = styled.div`
/* margin-top: 20px; */
svg {
	width: 100%; height: 100%;
}
svg text {
font-size: 40px; 
	animation: stroke 5s infinite alternate;
  animation-delay: 3s;
	stroke-width: 2;
	stroke: var(--accentColor);
  fill: #fff5ed;
  font-family: 'Marck Script';
	font-size: 4vw;
  text-align: center;
  @media screen and (min-width: 1200px) {
      font-size: 60px; 
  }
}
@keyframes stroke {
	0%   {
		fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1); }
	80%  {fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1); stroke-width: 3; }
	100% {
		fill: rgba(255,77,77,1); stroke: rgba(255,77,77,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}

	
}
@media screen and (max-width: 480px) {
height: 50px;
  }
`;

export const MainSection = styled.div`
/* margin: auto; */
min-height: 500px;
@media screen and (min-width: 778px) {
min-height: 700px;
  }
`;
export const SectionComponent = styled.section`
max-width: 1200px;
/* margin-left: 200px; */
/* margin-bottom:200px; */
font-size: 18px;
line-height:150%;
min-height: 500px;
overflow: auto;

@media screen and (min-width: 778px) {
min-height: 700px;
  }
`;
export const HomeComponent = styled.div`
margin-left: auto;
margin-right: auto;
padding:10px;

`
export const ArticleText = styled.p`
font-size: 18px;
line-height: 1.2;
font-family: 'Roboto Slab', serif;
@media screen and (max-width: 480px) {
font-size: 14px;
  }
`
export const MainTitle = styled.h3`
color: var(--accentColor);
font-weight: bold;
font-size: 20px;
line-height: 1.4;
text-align: center;
text-transform: uppercase;
margin-bottom: 20px;
@media screen and (min-width: 778px) {
font-size: 32px;
margin-bottom: 20px;
  }
`;
export const MainText = styled.div`
color: var(--mainColor);
display:flex;
justify-content: center;
flex-direction:column;
font-size: 12px;
line-height: 1.5;
margin-bottom: 20px;
@media screen and (min-width: 778px) {
font-size: 16px;
  }
`;

export const FormText = styled.div`
margin-top: 40px;
margin-bottom: 10px;
`
export const FormList = styled.ul`
margin-bottom: 20px;
font-size: 14px;
@media screen and (min-width: 778px) {
font-size: 18px;
  }
`

export const FormItem = styled.li`
list-style:square;
margin-left: 30px;
`
export const CommentText = styled.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
@media screen and (min-width: 778px) {
font-size: 14px;
  }
`