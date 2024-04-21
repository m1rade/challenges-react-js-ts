import { Link } from 'react-router-dom';

export function CartOverview() {
  return (
    <div className="absolute bottom-0 z-[999] flex w-full items-center justify-between bg-orange-500 px-5 py-3 text-center text-sm uppercase text-stone-100 transition-all duration-300 sm:bottom-8 sm:right-8 sm:block sm:w-auto sm:rounded-3xl sm:px-4 md:text-base">
      <p className="space-x-4 font-semibold text-stone-50 sm:mb-3">
        <span>23 pizzas:</span>
        <span>$23.6</span>
      </p>
      <Link
        to="/cart"
        className="text-stone-100 hover:text-stone-50 hover:underline">
        Open cart &rarr;
      </Link>
    </div>
  );
}
