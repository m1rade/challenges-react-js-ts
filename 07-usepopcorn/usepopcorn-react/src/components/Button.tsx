export function Button({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}) {
  const handleOnClick = () => onClick();

  return (
    <button onClick={handleOnClick} className={className}>
      {children}
    </button>
  );
}
