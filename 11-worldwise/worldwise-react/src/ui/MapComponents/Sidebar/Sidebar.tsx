import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../common/Logo';
import { SidebarNav } from './SidebarNav';

const SidebarContainer = styled.div`
  background-color: var(--color-dark--1);
  padding: 3rem 5rem 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarFooter = styled.footer`
  margin-top: auto;

  & .copyright {
    font-size: 1.2rem;
    color: var(--color-light--1);
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <Logo />
      <SidebarNav />

      <Outlet />

      <SidebarFooter>
        <p className="copyright">&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </SidebarFooter>
    </SidebarContainer>
  );
}
