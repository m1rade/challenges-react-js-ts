import styled from 'styled-components';
import { Map } from '../ui/MapComponents/Map/Map';
import { Sidebar } from '../ui/MapComponents/Sidebar/Sidebar';
import { User } from '../ui/common/User';

const GridContainer = styled.div`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  overscroll-behavior-y: none;
  display: grid;
  grid-template-columns: 46rem 1fr;
  position: relative;
`;

export function MapLayout() {
  return (
    <GridContainer>
      <User />

      <Sidebar />
      <Map />
    </GridContainer>
  );
}
