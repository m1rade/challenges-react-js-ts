import { useLoaderData } from 'react-router-dom';
import { apiRestaurant } from '../../services/apiRestaurant';
import { MenuItem } from './MenuItem';

const loader = async () => await apiRestaurant.getMenu();

export function Menu() {
  const menu = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <ul className="mb-11 divide-y divide-orange-500 px-2">
      {menu.map(item => (
        <MenuItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

Menu.loader = loader;
