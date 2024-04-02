import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';

export const MainContainer = styled.main`
  min-height: calc(100vh - 5rem);
  margin: 2.5rem;
  padding: 2.4rem 4.8rem;
  background-color: var(--color-dark--1);
`;

export const SectionContainer = styled.section`
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
  align-items: center;
`;

export const Heading2 = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const Picture = styled.img`
  width: 100%;
`;

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer>
      <Nav />
      {children}
    </MainContainer>
  );
}
