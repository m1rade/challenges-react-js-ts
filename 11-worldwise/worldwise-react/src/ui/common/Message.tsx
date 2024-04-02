import styled from 'styled-components';

const StyledMessage = styled.p`
  text-align: center;
  font-size: 1.8rem;
  width: 80%;
  margin: 2rem auto;
  font-weight: 600;
`;

export function Message({ message }: { message: string }) {
  return (
    <StyledMessage>
      <span role="img">🌍</span> {message}
    </StyledMessage>
  );
}
