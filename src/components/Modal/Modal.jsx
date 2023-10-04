// import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 540px;
  max-height: auto;
  position: relative;
  padding: 40px;
  margin: 20px;
  overflow-y: auto;
  border-radius: 24px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Modal = ({ isOpen, closeModal, children}) => {
  
  const handleModalClick = (event) => {
    event.stopPropagation();
  };
   const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={handleBackdropClick}>
          <ModalContent className="ModalContent" onClick={handleModalClick}>
            <CloseButton onClick={closeModal}>
              <FaTimes size={18} />
            </CloseButton>
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
        
  
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;