import { useAppSelector } from '../../app/hooks';
import { selectFullName } from './customerSlice';

function Customer() {
  const fullName = useAppSelector(selectFullName);

  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
