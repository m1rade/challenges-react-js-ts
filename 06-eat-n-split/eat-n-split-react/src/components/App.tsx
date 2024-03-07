import { useState } from 'react';
import { Button } from './Button';
import { FriendsList } from './FriendsList';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';

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
  const [showForm, setShowForm] = useState(false);

  const handleAddFriend = () => setShowForm(true);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
