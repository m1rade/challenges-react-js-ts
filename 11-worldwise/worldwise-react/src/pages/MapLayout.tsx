import styled from 'styled-components';
import { Map } from '../ui/MapComponents/Map/Map';
import { Sidebar } from '../ui/MapComponents/Sidebar/Sidebar';

const GridContainer = styled.div`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  overscroll-behavior-y: none;
  display: grid;
  grid-template-columns: 46rem 1fr;
`;

export function MapLayout() {
  return (
    <GridContainer>
      <Sidebar />
      <Map />
    </GridContainer>
  );
}
