import { IFriend } from './App';
import { Friend } from './Friend';

export function FriendsList({
  friends,
  onSelect,
  selectedFriendID
}: {
  friends: IFriend[];
  onSelect: (friend: IFriend) => void;
  selectedFriendID: number | null
}) {
  return (
    <ul>
      {friends.map(fr => (
        <Friend key={fr.id} item={fr} selectedFriendID={selectedFriendID} onSelect={onSelect} />
      ))}
    </ul>
  );
}
