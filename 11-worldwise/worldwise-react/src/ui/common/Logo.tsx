import styled from 'styled-components';

const Logo = styled.img`
  height: 5.2rem;
`;

Logo.defaultProps = {
  src: '/logo.png',
  alt: 'world wise logo',
};

export default Logo;
