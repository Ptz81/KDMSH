import { styled } from "styled-components";

export const Button = styled.button`
padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: white;
 z-index: 1;
 background-color: var(--accentColor);
margin-left: auto;
margin-right: auto;
 backdrop-filter: blur(10px);
 ${'' /* border: 0.5px solid var(--subColor); */}
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
 margin-bottom: 20px;
 /* margin-top: 20px; */

&:hover {
cursor: pointer;
color: var(--accentColor);
&:before{
width: 100%;
}

}

&:before{
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
  background: #fff5ed;
  color: var(--accentColor);
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

`;
export const ButtonTitle = styled.span`
 font-size: 15px;
 z-index: 3;
 position: relative;
 font-weight: 600;
`