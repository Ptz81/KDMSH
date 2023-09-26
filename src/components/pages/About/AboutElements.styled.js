import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AboutContainer = styled.div`
/* position: relative;
display: flex;
flex-direction:column; */

`

export const AboutWrapper = styled.div`
${'' /* position:absolute; */}
${'' /* bottom: 0; */}
${'' /* right: 0; */}
${'' /* max-width:700px; */}
${'' /* margin-left: auto; */}
`

export const AboutList = styled.ul`
position: absolute;
 list-style-type: none;
 text-decoration: none;
color: #3b3937;
 display: flex;
 flex-direction: column;
 gap: 12px;
 margin-top: 50px;
margin-bottom: 20px;
 ${'' /* > li{
     font-size: 50px;
     font-weight: 800;
 } */}
 > li button {
    padding: 0;
  margin: 0;
  border: none;
  background: none;

    --primary-color: #212121;
  --hovered-color: #ff4d4d;
  position: relative;
  display: flex;
  ${'' /* font-weight: 400; */}
  ${'' /* font-size: 50px; */}
  ${'' /* gap: 0.5rem; */}
  align-items: center;
  > a{
     font-size: 18pxpx;
     font-weight: 700;
 }
 }

 > li button::after {
   position: absolute;
   content: '';
   width: 0;
   left: 0;
   bottom: -5px;
   background:var(--hovered-color);
   height:2px;
   transition: 0.3s ease-out;
 }
 > li button Link::before{
   position: absolute;
   content: 'Read about our mission';
   width: 0%;
   inset: 0;
   bottom: -7px;
   color:var(--hovered-color);
  overflow: hidden;
   transition: 0.3s ease-out;
 }
 > li button:hover::after{
   width: 100%;
 }
  > li button:hover Link::before{
   width: 100%;
 }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
   margin: 0;
  position: relative;
  font-size: 18px;
  color: var(--primary-color)

`;