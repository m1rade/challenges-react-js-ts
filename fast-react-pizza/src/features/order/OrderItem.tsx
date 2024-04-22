import type { CartItemDomain } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  item: CartItemDomain;
};
export function OrderItem({ item: { name, quantity, totalPrice } }: Props) {
  return (
    <li className="px-6 py-3">
      <div className="flex items-center justify-between gap-4 text-sm md:text-base">
        <p>
          <span className="font-bold">{quantity} &times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
