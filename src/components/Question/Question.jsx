import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import plus from '../../components/Images/plus.svg'
// import minus from '../../components/Images/'

const QuestionContainer = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const QuestionText = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const Answer = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  margin-top: 10px;
`;

const PlusMinus = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;



const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QuestionContainer>
      <QuestionText onClick={toggleAnswer}>
        {question}
        <PlusMinus>{isOpen ? '-' : '+'}</PlusMinus>
      </QuestionText>
      <Answer isOpen={isOpen}>{isOpen && answer}</Answer>
    </QuestionContainer>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default Question;
