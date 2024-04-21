import type React from 'react';

interface PropsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputType?: 'search' | 'primary';
}

const inputTypes = {
  search:
    'w-28 rounded-lg bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72',
  primary:
    'mb-8 w-72 rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50 md:px-6 md:py-3',
};

export default function Input({ inputType = 'primary', className, ...props }: PropsType) {
  return (
    <input
      className={inputTypes[inputType]}
      {...props}
    />
  );
}
