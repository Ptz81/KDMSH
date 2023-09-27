import styled from '@emotion/styled';
export const SliderWrapper = styled.div`
margin-left: 250px;
@media screen and (min-width: 300px) and (max-width: 777px){
	margin-left: 150px;
}    
`
export const ContainerSlider = styled.div`
position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  height: 500;
  margin: 0px auto 0 0;
	border-radius: 20;
  @media screen and (min-width: 300px) and (max-width: 700px){
      margin: 0px auto 0;
      max-width: 80%;
      height: 300;
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
	  -webkit-overflow-scrolling:touch;
    }
	@media screen and (min-width: 778px) and (max-width: 1023px){
      /* margin: 20px auto 0; */
      width: 80%;
      display: flex;
	  /* height: 400; */
		overflow-x: auto;
      scroll-snap-type: 'x mandatory';
      scroll-behavior: 'smooth';
	   -webkit-overflow-scrolling:touch;
    }
	`


export const Title = styled.h2`
display: none;
margin-left: 40%;
	margin-top: 2rem;
	@media screen and (min-width: 300px) and (max-width: 700px){
		margin-left: 13%;
    	margin-top: 2rem;
	}
	@media screen and (min-width: 778px) and (max-width: 1023px){
		margin-left: 35%;
    	margin-top: 2rem;
	}
`
	
export const Slide = styled.div`
width: 90%;
	height: 90%;
	position: absolute;
	opacity: 0;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media screen and (max-width: 777px){
		width: 100%;
    	height: 100%;
		flex-shrink: 0; 
		transform-origin: center center;
		transform: scale(1);
		transition: transform 0.5s;
		position: relative;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`
	

export const ActiveAnim = styled(Slide)`
opacity: 1;
`
	
export const Button = styled.button`
width: 40px;
	height: 40px;
	border-radius: 30%;
	background: white;
	border: 1px solid rgba(34, 34, 34, 0.287);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	img {
		width: 20px;
		height: 20px;
		pointer-events: none;
	}
	@media screen and (max-width: 777px){
		display: none;
	}
`
export const PrevButton = styled(Button)`
top: 95%;
	left: 10px;
	transform: translateY(-50%);
`
export const NextButton = styled(Button)`
	top: 95%;
	right: 150px;
	transform: translateY(-50%);
`
export const ContainerDots = styled.div`
margin-top: 3rem;
	margin-left: 0;
	margin-right: auto;
	display: flex;
	width: 80%;
	overflow-x: auto;
	/* @media screen and (max-width: 700px){
		width: 80%;
		overflow-x: auto;
		padding-bottom: 1rem;
	} */

	/* @media screen and (min-width: 1024px){
		width: 80%;
		overflow-x: auto;
		padding-bottom: 1rem;
	} */
`
	

export const Img = styled.div`
img {
		width: 30px;
		height: 30px;
	}
`
	
export const ImgFull = styled.div`
	img {
		width: 100%;
		height: 100%;
		border-radius: 20%;
	}
`
export const Dot = styled.div`
width: 60px !important;
	height: 60px;
	border-radius: 20%;
	border: 3px solid #DADADA;
	margin: 0 5px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
`
	

export const ThumbContainer = styled.div`
	display: flex;
	width: 100% ;

	flex-direction: column;
	justify-content: center;
	align-items: center;
`
    
export const SlideWithButton = styled.div`
	position: relative;
	overflow-x: auto;
	width: 100%;
	text-align: center;
	margin-bottom: 4rem;
	@media screen and (max-width: 700px){
		overflow-x: auto;
		width: 100%;
		text-align: center;
	}
`

