import { IFriend } from './App';
import { Friend } from './Friend';

type PropsType = { friends: IFriend[] };
export function FriendsList({ friends }: PropsType) {
  return (
    <ul>
      {friends.map(fr => (
        <Friend key={fr.id} item={fr} />
      ))}
    </ul>
  );
}
