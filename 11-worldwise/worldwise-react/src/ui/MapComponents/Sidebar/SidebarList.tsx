import styled, { css } from 'styled-components';

export const SidebarList = styled.ul<{ $type: SidebarItemType }>`
  width: 100%;
  height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 1.4rem;

  ${props => {
    switch (props.$type) {
      case 'cities':
        return css`
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        `;
      case 'countries':
        return css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-content: start;
          gap: 1.6rem;
        `;
      default:
        return '';
    }
  }}
`;

export type SidebarItemType = 'cities' | 'countries';
