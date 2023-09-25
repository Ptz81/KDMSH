import { useState } from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import { mobileMenu, xCross } from '../Images/index.js';
import {
  StyledContaiber,
  StyledMenuIcon,
  StyledMenuWrapper,
} from './MobileMenu.styled.js';

const MenuForMobile = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenuOpen = () => {
    setIsShowMenu(true);

    document.body.classList.add('no-scroll');
  };

  const handleMenuClose = () => {
    setIsShowMenu(false);

    document.body.classList.remove('no-scroll');
  };

  return (
    <StyledContaiber>
      {!isShowMenu ? (
        <StyledMenuIcon
          onClick={handleMenuOpen}
          src={mobileMenu}
          alt="mobile menu"
        />
      ) : (
        <StyledMenuIcon
          onClick={handleMenuClose}
          src={xCross}
          alt="mobile menu close"
        />
      )}
      {isShowMenu ? (
        <StyledMenuWrapper>
          <Navigation closeMobileMenu={handleMenuClose} />
        </StyledMenuWrapper>
      ) : null}
    </StyledContaiber>
  );
};

export default MenuForMobile;