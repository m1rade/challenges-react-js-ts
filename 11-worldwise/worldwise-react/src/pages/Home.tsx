import styled, { css } from 'styled-components';
import { ROUTES } from '../App';
import { CtaButton } from '../ui/common/Buttons';
import { Nav } from '../ui/common/Nav';
import { MainContainer } from '../ui/common/PageComponents';

const Homepage = styled(MainContainer)`
  height: calc(100vh - 5rem);
  background-image: linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url('../bg.jpg');
  background-size: cover;
  background-position: center;
  background-color: unset;
`;

const Section = styled.section`
  height: 84%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2.4rem;
`;

const HomeHeading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 4.4rem;
      line-height: 1.3;
    `}

  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 1.8rem;
      color: var(--color-light--1);
      margin-bottom: 2.4rem;
      width: 60%;
    `}
`;

export function Home() {
  return (
    <Homepage>
      <Nav />
      <Section>
        <HomeHeading as="h1">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </HomeHeading>
        <HomeHeading as="h2">
          A world map that tracks your footsteps into every city you can think of. Never forget your forget your
          wonderful experiences, and show your friends how you have wandered the world.
        </HomeHeading>
        <CtaButton to={`/${ROUTES.login}`}>Start tracking now</CtaButton>
      </Section>
    </Homepage>
  );
}
