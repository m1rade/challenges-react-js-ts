import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICity } from '../../../types/data';
import { formatDate } from '../../../utils/formatDate';
import { Button } from '../../common/Buttons';
import { Message } from '../../common/Message';
import { Spinner } from '../../common/Spinner';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';

const StyledCityItem = styled(SidebarItem)`
  & span {
    font-size: 2.2rem;
  }

  & h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-right: auto;
  }

  & time {
    font-size: 1.4rem;
  }
`;

type CityItemProps = {
  city: ICity;
};
function CityItem({ city: { emoji, cityName, date, id, position } }: CityItemProps) {
  return (
    <li>
      <StyledCityItem as={Link} to={`${id}?lat=${position.lat}&lng=${position.lng}`} $type="cities">
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>{formatDate(date, navigator.language)}</time>
        <Button $type="delete">&times;</Button>
      </StyledCityItem>
    </li>
  );
}

export type CitiesProps = {
  cities: ICity[];
  isLoading: boolean;
};
export function Cities({ cities, isLoading }: CitiesProps) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <SidebarList $type="cities">
      {cities.map(c => (
        <CityItem key={c.id} city={c} />
      ))}
    </SidebarList>
  );
}
