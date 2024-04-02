import styled, { css } from 'styled-components';
import { SidebarItemType } from './SidebarList';

export const SidebarItem = styled.li<{ $type: SidebarItemType }>`
  color: inherit;
  text-decoration: none;
  background-color: var(--color-dark--2);
  border-radius: 0.7rem;
  border-left: 5px solid
    ${({ $type }) => {
      switch ($type) {
        case 'cities':
          return 'var(--color-brand--2)';
        case 'countries':
          return 'var(--color-brand--1)';
        default:
          return '';
      }
    }};
  ${({ $type }) => {
    switch ($type) {
      case 'cities':
        return css`
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 0.4rem 1.4rem;
        `;
      case 'countries':
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          padding: 0.8rem 1.8rem;

          font-size: 1.6rem;
          font-weight: 600;

          & span:first-child {
            font-size: 1.8rem;
            line-height: 1;
          }
        `;
      default:
        return '';
    }
  }};
`;
