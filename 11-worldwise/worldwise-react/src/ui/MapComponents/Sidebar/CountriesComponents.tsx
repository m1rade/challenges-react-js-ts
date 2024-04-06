import { useCitiesContext } from '../../../contexts/CitiesContext';
import { ICountry, toUniqueCountries } from '../../../utils/toUniqueCountries';
import { Message } from '../../common/Message';
import { Spinner } from '../../common/Spinner';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';

function CountryItem({ country }: { country: ICountry }) {
  return (
    <SidebarItem $type="countries">
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </SidebarItem>
  );
}

export function Countries() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />;

  const countries = toUniqueCountries(cities, 'country');

  return (
    <SidebarList $type="countries">
      {countries.map(c => (
        <CountryItem key={c.id} country={c} />
      ))}
    </SidebarList>
  );
}
