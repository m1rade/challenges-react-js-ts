import { StylishLink } from '../../ui/StylishLink';

export function EmptyCart() {
  return (
    <div>
      <StylishLink to="/menu">&larr; Back to menu</StylishLink>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}
