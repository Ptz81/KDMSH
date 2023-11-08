import { useState } from "react";
import { CarouselWrapper, Indicator, Indicators, LeftArrow, RightArrow, Slide } from "./Carousel.styled";
import PropTypes from "prop-types";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <CarouselWrapper>
      <LeftArrow onClick={prevSlide}>
        <BsArrowLeftCircleFill style={{width:"2.5em", height:"2.5em", fill:"wheat"}}/>
      </LeftArrow>
      {data.map((item, idx) => (
        <Slide
          src={item.src}
          alt={item.alt}
          key={idx}
          active={slide === idx}
        />
      ))}
      <RightArrow onClick={nextSlide}>
        <BsArrowRightCircleFill style={{width:"2.5em", height:"2.5em", fill:"wheat"}}/>
      </RightArrow>
      <Indicators>
        {data.map((_, idx) => (
          <Indicator
            key={idx}
            active={slide === idx}
            onClick={() => setSlide(idx)}
          />
        ))}
      </Indicators>
    </CarouselWrapper>
  );
};
Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Carousel;