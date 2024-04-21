import type React from 'react';
import { Link, type To } from 'react-router-dom';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  to?: To;
  btnStyle?: 'primary' | 'secondary' | 'small' | 'functional';
}

const primaryBtn =
  'inline-block bg-orange-500 font-semibold uppercase text-stone-50 outline-offset-8 transition-all duration-300 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-50 active:bg-orange-700';
const secondaryBtn =
  'inline-block rounded-xl border-2 border-amber-400 font-medium uppercase text-stone-900 outline-offset-8 transition-all duration-300 hover:bg-amber-300  focus-visible:outline-none focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50 active:bg-amber-100';

const btnStyles = {
  primary: primaryBtn + ' rounded-xl px-3 py-2 md:px-4 md:py-3 md:text-lg',
  secondary: secondaryBtn + ' px-3 py-1.5 md:px-4 md:py-2.5 md:text-lg',
  small: secondaryBtn + ' px-2 py-1 md:px3 md:py-2 text-sm md:text-base',
  functional: 'rounded-full px-3 py-1 text-lg lg:px-4 lg:py-2 lg:text-xl' + primaryBtn,
};

export function Button({ children, className, to, btnStyle = 'primary', ...restProps }: Props) {
  if (to) {
    return (
      <Link
        to={to}
        className={btnStyles[btnStyle]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={btnStyles[btnStyle]}
      {...restProps}>
      {children}
    </button>
  );
}
