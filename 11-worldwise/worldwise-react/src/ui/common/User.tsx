import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../contexts/AuthContext';
import { Button } from './Buttons';

const FloatedUserBox = styled.div`
  position: absolute;
  z-index: 999;
  right: 2rem;
  top: 2rem;
  background-color: var(--color-dark--1);
  box-shadow: 0 0.8rem 2.4rem rgba(36, 42, 46, 0.5);
  padding: 1.2rem;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const UserPicture = styled.img`
  border-radius: 50%;
  height: 4rem;
`;
const Greeting = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;
const LogoutBtn = styled(Button)`
  font-size: 1.2rem;
`;

export function User() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate('/');
  };

  return (
    <FloatedUserBox>
      <UserPicture src={user.avatar} alt={user.name} />
      <Greeting>Welcome, {user.name}</Greeting>
      <LogoutBtn $type="secondary" onClick={handleClick}>
        Logout
      </LogoutBtn>
    </FloatedUserBox>
  );
}
