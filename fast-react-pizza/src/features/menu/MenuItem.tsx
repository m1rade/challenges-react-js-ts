import type { IMenuItem } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';

export function MenuItem({ item }: { item: IMenuItem }) {
  const { imageUrl, ingredients, name, soldOut, unitPrice } = item;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}</div>
      </div>
    </li>
  );
}
