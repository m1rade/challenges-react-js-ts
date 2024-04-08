import styled from 'styled-components';
import { Spinner } from './Spinner';

const StyledSpinnerFullScreen = styled.div`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  background-color: var(--color-dark--1);
`;

export function SpinnerFullScreen() {
  return (
    <StyledSpinnerFullScreen>
      <Spinner />
    </StyledSpinnerFullScreen>
  );
}
