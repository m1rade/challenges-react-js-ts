import { useLoaderData } from 'react-router-dom';
import { apiRestaurant } from '../../services/apiRestaurant';
import { MenuItem } from './MenuItem';

const loader = async () => await apiRestaurant.getMenu();

export function Menu() {
  const menu = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <ul>
      {menu.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

Menu.loader = loader;
