import { NextButton, PrevButton } from "./Slider.styled";
import leftArrow from "../../Images/arrow-left.svg";
import rightArrow from "../../Images/arrow-right.svg";
import {PropTypes} from 'prop-types';

export default function BtnSlider({ direction, moveSlide }) {
    
  return (
     direction === 'next' ? (
      <NextButton onClick={moveSlide}>
        <img src={rightArrow} alt="navigator" />
      </NextButton>
    ) : (
      <PrevButton onClick={moveSlide}>
        <img src={leftArrow} alt="navigator" />
      </PrevButton>
    )
  );
}

BtnSlider.propTypes = {
  direction: PropTypes.oneOf(["next", "prev"]).isRequired,
  moveSlide: PropTypes.func.isRequired,
};
