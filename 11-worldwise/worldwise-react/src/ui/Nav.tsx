import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CtaButton } from './Buttons';

const Navbar = styled.nav`
  width: 100%;

  & > ul {
    display: grid;
    grid-template-columns: 2fr auto auto auto;
    gap: 3.2rem;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 5.2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;

  &.active {
    color: var(--color-brand--2);
  }
`;

const LoginButton = styled(CtaButton)`
  padding: 0.6rem 1.6rem;
`;

export function Nav() {
  return (
    <Navbar>
      <ul>
        <li>
          <NavLink to="/">
            <Logo src="logo.png" alt="world wise logo" />
          </NavLink>
        </li>
        <li>
          <StyledNavLink to="/pricing">Pricing</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/product">Product</StyledNavLink>
        </li>
        <li>
          <LoginButton to="/login">Log in</LoginButton>
        </li>
      </ul>
    </Navbar>
  );
}
