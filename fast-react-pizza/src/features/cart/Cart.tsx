import { Button } from '../../ui/Button';
import { StylishLink } from '../../ui/StylishLink';
import { formatCurrency } from '../../utils/helpers';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export function Cart() {
  let totalPrice = 0;

  return (
    <div className="px-4 py-3">
      <StylishLink to="/menu">&larr; Back to menu</StylishLink>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-3 divide-y divide-orange-500 border-b-2 border-b-orange-500 md:text-lg">
        {fakeCart.map(item => {
          totalPrice += item.totalPrice;

          return (
            <CartItem
              key={item.pizzaId}
              item={item}
            />
          );
        })}
      </ul>

      <p className="mt-2 text-lg font-semibold md:text-right md:text-xl">{formatCurrency(totalPrice)}</p>

      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button btnStyle="secondary">Clear cart</Button>
      </div>
    </div>
  );
}
