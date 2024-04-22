import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { formatCurrency } from '../../utils/helpers';
import { selectTotalPrice, selectTotalQuantity } from './cartSlice';

export function CartOverview() {
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalPrice = useAppSelector(selectTotalPrice);

  const [show, setShow] = useState(false);

  const handleMouse = () => setShow(show => !show);

  if (!totalQuantity) return null;

  return (
    <div
      onMouseOver={handleMouse}
      onMouseOut={handleMouse}
      className="absolute bottom-0 z-[999] flex w-full items-center justify-between bg-orange-500 px-5 py-3 text-center text-sm uppercase text-stone-100 transition-all duration-300 sm:bottom-4 sm:right-8 sm:block sm:w-auto sm:rounded-2xl sm:px-4 md:text-base">
      <p className={`space-x-4 font-semibold text-stone-50 sm:mb-3 ${show ? 'sm:block' : 'sm:hidden'}`}>
        <span>{totalQuantity > 1 ? `${totalQuantity} pizzas` : `${totalQuantity} pizza`}</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="text-stone-100 hover:text-stone-50 hover:underline">
        Open cart &rarr;
      </Link>
    </div>
  );
}
