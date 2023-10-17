import PropTypes from 'prop-types';
import { StyledNav, StyledNavLink } from './Navigation.styled.js';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <StyledNav>
      <StyledNavLink to="/" onClick={closeMobileMenu}>
        Головна
      </StyledNavLink>
      <StyledNavLink to="/about" onClick={closeMobileMenu}>
        Про нас
      </StyledNavLink>
      <StyledNavLink to="management" onClick={closeMobileMenu}>
        Дирекція
      </StyledNavLink>
      <StyledNavLink to="team/1" onClick={closeMobileMenu}>
        Викладачі
      </StyledNavLink>
      <StyledNavLink to="reviews" onClick={closeMobileMenu}>
        Умови вступу
      </StyledNavLink>
      <StyledNavLink to="/departments" onClick={closeMobileMenu}>
        Відділи
      </StyledNavLink>
      <StyledNavLink to="/bands" onClick={closeMobileMenu}>
        Колективи
      </StyledNavLink>
      <StyledNavLink to="/contacts" onClick={closeMobileMenu}>
        Контакти
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
Navigation.propTypes = {
  closeMobileMenu: PropTypes.func,
};