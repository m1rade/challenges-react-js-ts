import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCitiesContext } from '../../../contexts/CitiesContext';
import { CityType } from '../../../types/data';
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
  city: CityType;
};
function CityItem({ city: { emoji, cityName, date, id, position } }: CityItemProps) {
  const { currentCity, deleteCity } = useCitiesContext();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <StyledCityItem
        as={Link}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        $type="cities"
        className={`${currentCity?.id === id ? 'active' : ''}`}>
        <span>{emoji}</span>
        <h3>{cityName}</h3>
        <time>{formatDate(date, navigator.language)}</time>
        <Button $type="delete" onClick={handleClick}>
          &times;
        </Button>
      </StyledCityItem>
    </li>
  );
}

export function Cities() {
  const { cities, isLoading } = useCitiesContext();

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
