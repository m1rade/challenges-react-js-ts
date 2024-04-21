import type React from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

interface Props extends LinkProps, React.RefAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  type?: 'logo';
}

const baseStyle = 'text-blue-500 hover:text-blue-600 hover:underline';
const linkTypes = {
  logo: 'tracking-widest focus-visible:outline-none focus-visible:ring focus-visible:ring-orange-500',
};

export function StylishLink({ children, type, to, className, ...restProps }: Props) {
  const navigate = useNavigate();

  if (to === '-1')
    return (
      <button
        className={baseStyle}
        onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      className={type === 'logo' ? linkTypes[type] : baseStyle}
      {...restProps}>
      {children}
    </Link>
  );
}
