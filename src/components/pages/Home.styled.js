import { styled } from "styled-components";

export const Image = styled.img`
 max-width: 100%;
 height: auto;
`;
export const Section = styled.section`
margin-top: 200px;
`

export const ImageTitle = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const TitleComponent = styled.h2`
font-family: 'Marck Script', cursive;
font-size: 100px;
text-align: center;
`;
// export const sectionContainer = styled.div`
// max-width: 800px;
// margin-left: 200px;
// `;
export const MainSection = styled.div`
margin: auto;

`;
export const SectionComponent = styled.section`
max-width: 800px;
margin-left: 200px;
/* margin-top:20px; */
font-size: 18px;
line-height:150%;
`;

export const MainTitle = styled.h3`
color: var(--accentColor);
font-weight: bold;
font-size: 24px;
margin-bottom: 20px;
`;
export const MainText = styled.div`
color: var(--mainColor);
display:flex;
flex-direction:column;
font-size: 16px;
margin-bottom: 20px;
`;

export const FormText = styled.div`
margin-top: 40px;
`
export const FormList = styled.ul`
margin-bottom: 20px;
`

export const FormItem = styled.li`
list-style:square;
margin-left: 30px;
`
export const CommentText = styled.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
`