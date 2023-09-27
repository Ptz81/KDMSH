import {useState} from 'react'
// import Axios from 'axios';
import BtnSlider from './BtnSlider.jsx'
import {  ActiveAnim, ContainerSlider, Slide, SlideWithButton, SliderWrapper, Title } from './Slider.styled.js';


import slide1 from '../../Images/slider/pic1.jpg';
import slide2 from '../../Images/slider/pic2.jpg';
import slide3 from '../../Images/slider/pic3.jpg';
import slide4 from '../../Images/slider/pic4.jpg';
import slide5 from '../../Images/slider/pic5.jpg';
import slide6 from '../../Images/slider/pic6.jpg';
const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)
    // const [slides, setSlides] = useState([])
 const nextSlide = () => {
        if (slideIndex !== slides.length) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slides.length);
        }
    }
    // useEffect(() => {
    //     async function getSlides() {
    //     const {data} = await Axios.get('https://jsonplaceholder.typicode.com/photos')
    //     setSlides(data)
    //     }
    //     getSlides()
    // },[])

    // const nextSlide = () => {
    //     if(slideIndex !== slides.slice(0, 6).length){
    //         setSlideIndex(slideIndex + 1)
    //     } 
    //     else{
    //         setSlideIndex(1)
    //     }
    // }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else{
    //         setSlideIndex(slides.slice(0, 6).length)
    //     }
    // }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }

    return (
        <SliderWrapper>
            <Title>Наша школа</Title>
            
            <SlideWithButton>
                <ContainerSlider>
                    {/* {slides.slice(0, 6).map((obj, index) => {
                        return (
                            <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                            
                            >
                                {slideIndex === index + 1 && (
                                    <img 
                                        src={obj.url} 
                                        alt={obj.title}
                                    />
                                )}
                                
                            </div>
                        )
                    })} */}
            {slides.map((img, index) => (
                        slideIndex === index + 1 ? (
                            <ActiveAnim key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                />
                            </ActiveAnim>
                        ) : (
                            <Slide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                />
                            </Slide>
                        )
                    ))}
                </ContainerSlider>
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            </SlideWithButton>
            {/* <ContainerDots>
                {slides.slice(0, 6).map((item, index) => (
                    <ThumbContainer key={item.id} onClick={() => moveDot(index + 1)} onScroll={() => nextSlide()} >
                        <div 
                        
                        className={slideIndex === index + 1 ? "dot active img-full" : "dot img"}
                        >
                            <img 
                                width={"100px"} height={"80px"}
                                src={item.thumbnailUrl} 
                                alt="thumbnailUrl"
                            />
                        </div>
                    </ThumbContainer>
                ))}
            </ContainerDots>   */}
            
        </SliderWrapper>
    )
}