export function Button({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const handleOnClick = () => onClick();

  return (
    <button onClick={handleOnClick} className="toggle-btn">
      {children}
    </button>
  );
}
