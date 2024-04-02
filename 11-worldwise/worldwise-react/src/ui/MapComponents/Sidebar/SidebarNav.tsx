import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../../App';

const SidebarNavigation = styled.nav`
  margin: 3rem 0 2rem;

  & > ul {
    display: flex;
    background-color: var(--color-dark--2);
    border-radius: 0.7rem;
  }
`;

const Tab = styled(NavLink)`
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 2rem;
  }

  &.active {
    background-color: var(--color-dark--0);
  }
`;

export function SidebarNav() {
  return (
    <SidebarNavigation>
      <ul>
        <li>
          <Tab to={ROUTES.cities}>Cities</Tab>
        </li>
        <li>
          <Tab to={ROUTES.countries}>Countries</Tab>
        </li>
      </ul>
    </SidebarNavigation>
  );
}
