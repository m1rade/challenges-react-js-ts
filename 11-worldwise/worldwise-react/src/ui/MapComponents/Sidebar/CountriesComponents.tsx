import { useCitiesContext } from '../../../contexts/CitiesContext';
import { Message } from '../../common/Message';
import { Spinner } from '../../common/Spinner';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';

function CountryItem({ country }: CountryItemProps) {
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

  const countries: ICountry[] = cities.reduce((arr: ICountry[], cur) => {
    if (arr.map(el => el.country).includes(cur.country)) return arr;
    else return [...arr, { id: cur.id, emoji: cur.emoji, country: cur.country }];
  }, []);

  return (
    <SidebarList $type="countries">
      {countries.map(c => (
        <CountryItem key={c.id} country={c} />
      ))}
    </SidebarList>
  );
}

interface ICountry {
  id: number;
  emoji: string;
  country: string;
}
type CountryItemProps = {
  country: ICountry;
};
