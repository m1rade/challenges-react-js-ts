import { FormEvent, useState } from 'react';
import { IFriend } from './App';
import { Button } from './Button';

export function FormAddFriend({ onAddFriend }: { onAddFriend: (newFriend: IFriend) => void }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = Date.now();
    const newFriend: IFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">👭 Friend name</label>
      <input id="friend-name" value={name} onChange={e => setName(e.currentTarget.value.trim())} type="text" />

      <label htmlFor="friend-img">🗿 Image URL</label>
      <input id="friend-img" value={image} onChange={e => setImage(e.currentTarget.value.trim())} type="text" />

      <Button>Add</Button>
    </form>
  );
}
