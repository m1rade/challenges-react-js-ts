import { useState } from 'react';
import { Button } from './Button';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';
import { FriendsList } from './FriendsList';

export interface IFriend {
  id: number;
  name: string;
  image: string;
  balance: number;
}
const initialFriends: IFriend[] = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState<IFriend[]>(initialFriends);
  const [showForm, setShowForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);

  const handleShowAddFriend = () => setShowForm(curShow => !curShow);

  const handleAddFriend = (newFriend: IFriend) => {
    setFriends(curFriends => [...curFriends, newFriend]);
    setShowForm(false);
  };

  const handleOnSelect = (friend: IFriend) => {
    showForm && setShowForm(false);

    setSelectedFriend(currentFr => (currentFr?.id === friend.id ? null : friend));
  };

  const handleOnSplitBill = (newBalance: number) => {
    setFriends(curFriends =>
      curFriends.map(f => (f.id === selectedFriend?.id ? { ...f, balance: f.balance + newBalance } : f))
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} selectedFriendID={selectedFriend?.id || null} onSelect={handleOnSelect} />
        {showForm && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showForm ? 'Close' : 'Add friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill key={selectedFriend.id} friend={selectedFriend} onSplitBill={handleOnSplitBill} />}
    </div>
  );
}

export default App;
