import styled from 'styled-components';

const BigMessage = styled.h1`
  font-size: 7rem;
  font-weight: 400;
  text-align: center;
  height: 100vh;
  padding: 9.6rem 0;
  background-color: var(--color-dark--1);
`;

export function Page404() {
  return <BigMessage>Page not found 🤔 (404)</BigMessage>;
}
