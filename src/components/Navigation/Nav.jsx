import PropTypes from 'prop-types';
import { StyledNav, StyledNavLink } from './Navigation.styled.js';
import { AboutList } from '../pages/About/AboutElements.styled.js';
import { useState } from 'react';

const Navigation = ({ closeMobileMenu }) => {
    const [aboutMenuVisible, setAboutMenuVisible] = useState(false);
     const toggleAboutMenu = () => {
    setAboutMenuVisible(!aboutMenuVisible);
  };
  return (
    <StyledNav>
      <li><StyledNavLink to="/" onClick={closeMobileMenu}>
        Головна
      </StyledNavLink></li>
      <li><StyledNavLink to="/about" onClick={toggleAboutMenu}>
        Про нас
      </StyledNavLink>
      {aboutMenuVisible && <AboutList />}
      </li>
      <li><StyledNavLink to="/departments" onClick={closeMobileMenu}>
        Відділи
      </StyledNavLink></li>
      <li><StyledNavLink to="/bands" onClick={closeMobileMenu}>
        Колективи
      </StyledNavLink></li>
      <li><StyledNavLink to="/contacts" onClick={closeMobileMenu}>
        Контакти
      </StyledNavLink></li>
    </StyledNav>
  );
};

export default Navigation;
Navigation.propTypes = {
  closeMobileMenu: PropTypes.func,
};