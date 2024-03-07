import { IFriend } from './App';
import { Button } from './Button';

type PropsType = { item: IFriend };
export function Friend({ item }: PropsType) {
  return (
    <li>
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
      <Button>Select</Button>
    </li>
  );
}
