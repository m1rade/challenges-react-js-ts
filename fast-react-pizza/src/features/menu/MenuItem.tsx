import type { IMenuItem } from '../../services/apiRestaurant';
import { Button } from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

export function MenuItem({ item }: { item: IMenuItem }) {
  const { imageUrl, ingredients, name, soldOut, unitPrice } = item;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-36 lg:h-60 ${soldOut ? 'opacity-80 grayscale' : ''}`}
      />
      <div className={`flex flex-grow flex-col pt-1 text-stone-900 ${soldOut ? 'text-stone-500 text-opacity-80' : ''}`}>
        <p className="text-lg font-semibold md:text-xl">{name}</p>
        <p
          className={`text-sm capitalize italic text-stone-700 md:text-base ${soldOut ? 'text-stone-500 text-opacity-80' : ''}`}>
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="lg:text-lg">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-orange-700 lg:text-lg">Sold out</p>
          )}

          {!soldOut && <Button btnStyle="functional">+</Button>}
        </div>
      </div>
    </li>
  );
}
