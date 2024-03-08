import { ChangeEvent, FormEvent, useState } from 'react';
import { IFriend } from './App';
import { Button } from './Button';

export function FormSplitBill({ friend, onSplitBill }: { friend: IFriend; onSplitBill: (newBalance: number) => void }) {
  const [bill, setBill] = useState<string | number>('');
  const [expense, setExpense] = useState<string | number>('');
  const friendExpense = bill ? Number(bill) - Number(expense) : '';
  const [whoIsPaying, setWhoIsPaying] = useState('you');

  const handleYourExpenseChange = (e: ChangeEvent<HTMLInputElement>) =>
    setExpense(Number(e.currentTarget.value) > +bill ? expense : Number(e.currentTarget.value));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!bill || !expense) return;

    onSplitBill(whoIsPaying === 'you' ? Number(friendExpense) : Number(-expense));
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill With {friend.name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input id="bill" value={bill} onChange={e => setBill(+e.currentTarget.value)} type="number" />

      <label htmlFor="your-expense">👨‍🦼 Your expense</label>
      <input id="your-expense" value={expense} onChange={handleYourExpenseChange} type="number" />

      <label htmlFor="friend-expense">🏃‍♂️ {friend.name}'s expense</label>
      <input id="friend-expense" value={friendExpense} type="text" disabled />

      <label htmlFor="select">💩 Who is paying the bill?</label>
      <select id="select" value={whoIsPaying} onChange={e => setWhoIsPaying(e.currentTarget.value)}>
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
