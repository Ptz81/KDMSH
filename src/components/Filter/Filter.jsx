import styled from "styled-components"
import PropTypes from 'prop-types';
// import { colors } from "../../styles/GlobalStyles";

const InputContainer = styled.div`
position: relative;
width: 100%;
@media only screen and (min-width: 1200px) {  
    width: 260px;
  }
`

const inputPrimary = styled.input`
box-sizing: border-box;
width: 100%;
  padding: 14px 22px;
  /* padding-left:200px; */
  border: 1px solid var(--semiAccentColor);
  /* border-right: 1px solid var(--semiAccentColor); */
  font-size: inherit;
  border-radius: 14px;
  background: var(--base);
  color: var(--mainColor);
  outline: none;
  z-index:9;
  @media only screen and (min-width: 1200px) {
    padding: 14px;
    width: 260px;
    border-radius: 14px;
  }
  
 :focus{
      border: 2px solid var(--accentColor);
     
    }
  ::placeholder{
        color: var(--lightGray);
        font-size: 14px;
        @media only screen and (min-width: 1200px){
    padding: 14px ;
    font-size: 14px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }
  ::before {
    content: "";
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }
`;
const inputSecondary = styled(inputPrimary)`
border-radius: 14px;
border-left: 1px solid var(--semiAccentColor);
::placeholder{
        color: var(--lightGray);
        font-size: 14px;
        @media only screen and (min-width: 1200px){
    padding: 14px ;
    font-size: 14px;
  }}
@media only screen and (min-width: 1200px) {
    padding-left: 200px;
  }
`

export const InputFilter = ({ value, onFilterChange, inputStyle, placeholder }) => {
  let InputComponent;
  if (inputStyle === 'active') {
    InputComponent = inputPrimary;
  } else if (inputStyle === 'secondary') {
    InputComponent = inputSecondary;
  }

  return (
    <InputContainer>

      <InputComponent
        type="text"
        name="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onFilterChange(e.target.value.replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","))} 
      />
    </InputContainer>
  );
};

InputFilter.propTypes = {
  value: PropTypes.string,
  inputStyle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};