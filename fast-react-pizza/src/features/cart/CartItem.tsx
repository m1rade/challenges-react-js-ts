import type { ICartItem } from '../../services/apiRestaurant';
import { Button } from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  item: ICartItem;
};
export default function CartItem({ item: { name, quantity, totalPrice } }: Props) {
  return (
    <li className="md: py-2 md:flex md:items-center md:justify-between">
      <p className="mb-3 md:mb-0">
        <span className="text-lg">{quantity}</span> &times; {name}
      </p>
      <div className="flex items-center justify-between md:flex-row-reverse md:gap-6">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <Button btnStyle="small">remove</Button>
      </div>
    </li>
  );
}
