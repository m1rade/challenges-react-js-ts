import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../../App';

const MapContainer = styled.div`
  height: 100%;
  background-color: var(--color-dark--2);
`;

export function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <MapContainer onClick={() => navigate(ROUTES.form)}>
      Map {lat} {lng}
    </MapContainer>
  );
}
