import {useState, useEffect} from 'react'

import Axios from 'axios';
import BtnSlider from '../Button'
import { ContainerDots, ContainerSlider, SlideWithButton, ThumbContainer, Title } from './Slider.styled.js';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)
    const [slides, setSlides] = useState([])

    useEffect(() => {
        async function getSlides() {
        const {data} = await Axios.get('https://jsonplaceholder.typicode.com/photos')
        setSlides(data)
        }
        getSlides()
    },[])

    const nextSlide = () => {
        if(slideIndex !== slides.slice(0, 6).length){
            setSlideIndex(slideIndex + 1)
        } 
        else{
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else{
            setSlideIndex(slides.slice(0, 6).length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div>
            <Title>MASTER WiZR Modules</Title>
            <ContainerDots>
                {slides.slice(0, 6).map((item, index) => (
                    <ThumbContainer key={item.id} onClick={() => moveDot(index + 1)} onScroll={() => nextSlide()} >
                        <div 
                        
                        className={slideIndex === index + 1 ? "dot active img-full" : "dot img"}
                        >
                            <img 
                                src={item.thumbnailUrl} 
                                alt="thumbnailUrl"
                            />
                        </div>
                        <p style={{marginTop: '1rem'}}>{item.title.split(' ')[0]}</p>
                    </ThumbContainer>
                ))}
            </ContainerDots>  
            <SlideWithButton>
                <ContainerSlider>
                    {slides.slice(0, 6).map((obj, index) => {
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
                    })}
                </ContainerSlider>
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            </SlideWithButton>
            
        </div>
    )
}