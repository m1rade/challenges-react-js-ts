import { IFriend } from './App';
import { Button } from './Button';

export function Friend({
  item,
  onSelect,
  selectedFriendID,
}: {
  item: IFriend;
  onSelect: (friend: IFriend) => void;
  selectedFriendID: number | null;
}) {
  const isSelected = selectedFriendID === item.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={item.image} alt={`${item.name} image`} />
      <h3> {item.name} </h3>
      {item.balance < 0 && (
        <p className="red">
          You owe {item.name} ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you ${Math.abs(item.balance)}
        </p>
      )}
      {item.balance === 0 && <p>You and {item.name} are even</p>}
      <Button onClick={() => onSelect(item)}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
}
