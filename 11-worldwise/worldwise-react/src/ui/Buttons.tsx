import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Button = styled.button<{
  $type?: 'primary' | 'back' | 'position';
}>`
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  color: inherit;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;

  ${props => {
    switch (props.$type) {
      case 'primary':
        return css`
          font-weight: 700;
          background-color: var(--color-brand--2);
          color: var(--color-dark--1);
        `;
      case 'back':
        return css`
          font-weight: 600;
          background: none;
          border: 1px solid currentColor;
        `;
      case 'position':
        return css`
          font-weight: 700;
          position: absolute;
          z-index: 1000;
          font-size: 1.4rem;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--color-brand--2);
          color: var(--color-dark--1);
          box-shadow: 0 0.4rem 1.2rem rgba(36, 42, 46, 0.16);
        `;
      default:
        return '';
    }
  }}
`;

export const CtaButton = styled(NavLink)<{ $margins?: string }>`
  display: inline-block;
  background-color: var(--color-brand--2);
  color: var(--color-dark--1);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  ${props => props.$margins}
`;
