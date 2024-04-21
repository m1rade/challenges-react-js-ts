import { SearchOrder } from '../features/order/SearchOrder';
import { Username } from '../features/user/Username';
import { StylishLink } from './StylishLink';

export function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-yellow-500 px-4 py-3 uppercase sm:px-6 lg:justify-around">
      <StylishLink
        to="/"
        type="logo">
        Fast Pizza Delivery Co.
      </StylishLink>
      <SearchOrder />
      <Username />
    </header>
  );
}
