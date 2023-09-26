import styled from '@emotion/styled';

export const ContainerSlider = styled.div({
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  maxWidth: '80%',
  height: 500,
  margin: '20px auto 0',
  borderRadius: 20,
  css: {
    '@media screen and (min-width: 300px) and (max-width: 700px)': {
      margin: '20px auto 0',
      maxWidth: '80%',
      height: 400,
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
      margin: '20px auto 0',
      maxWidth: '80%',
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
    },
  },
});


export const Title = styled.h2`
margin-left: 40%;
	margin-top: 2rem;
	@media screen and (min-width: 300px) and (max-width: 700px){
		margin-left: 13%;
    	margin-top: 2rem;
	}
	@media screen and (min-width: 768px) and (max-width: 1023px){
		margin-left: 35%;
    	margin-top: 2rem;
	}
`
	
export const Slide = styled.div`
width: 100%;
	height: 100%;
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
	@media screen and (max-width: 1023px){
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
	

export const ActiveAnim = styled.div`
opacity: 1;
`
	
export const BtnSlide = styled.button`
width: 40px;
	height: 40px;
	border-radius: 50%;
	background: white;
	border: 1px solid rgba(34, 34, 34, 0.287);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	img {
		width: 25px;
		height: 25px;
		pointer-events: none;
	}
	@media screen and (max-width: 1023px){
		display: none;
	}


`
	

export const Prev = styled.img`
top: 50%;
	left: 40px;
	transform: translateY(-60%);
`
export const Next = styled.img`
	top: 50%;
	right: 40px;
	transform: translateY(-60%);
`
export const ContainerDots = styled.div`
margin-top: 3rem;
	bottom: 10px;
	margin-left: 50%;
	transform: translateX(-50%);
	display: flex;
	width: 45%;
	overflow-x: auto;
	@media screen and (max-width: 700px){
		width: 80%;
		overflow-x: auto;
		padding-bottom: 1rem;
	}
	@media screen and (max-width: 1023px){
		width: 75%;
		overflow-x: auto;
		padding-bottom: 1rem;
	}
	@media screen and (min-width: 1024px){
		width: 60%;
		overflow-x: auto;
		padding-bottom: 1rem;
	}
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
	width: 200px !important;
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

