import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../../App';
import { useCitiesContext } from '../../../contexts/CitiesContext';

const Container = styled.div`
  height: 100%;
  background-color: var(--color-dark--2);

  & .map {
    height: 100%;
  }
`;

export function Map() {
  const [mapPosition, setMapPosition] = useState<[number, number]>([51.505, -0.09]);
  const { cities } = useCitiesContext();

  const [searchParams] = useSearchParams();
  const lat = Number(searchParams.get('lat'));
  const lng = Number(searchParams.get('lng'));

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <Container>
      <MapContainer center={mapPosition} zoom={7} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => {
          return (
            <Marker key={city.id} position={city.position}>
              <Popup>{city.cityName}</Popup>
            </Marker>
          );
        })}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </Container>
  );
}

function ChangeCenter({ position }: { position: LatLngExpression }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent('click', () => navigate(ROUTES.form));
  return null;
}
