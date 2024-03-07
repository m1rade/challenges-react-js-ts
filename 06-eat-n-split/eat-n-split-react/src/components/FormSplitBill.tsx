import { IFriend } from './App';
import { Button } from './Button';

export function FormSplitBill({ friend }: { friend?: IFriend }) {
  return (
    <form className='form-split-bill'>
      <h2>Split a Bill With {'X'}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input id="bill" type="number" />

      <label htmlFor="your-expense">👨‍🦼 Your expense</label>
      <input id="your-expense" type="number" />

      <label htmlFor="friend-expense">🏃‍♂️ X's expense</label>
      <input id="friend-expense" type="text" disabled />

      <label htmlFor="select">💩 Who is paying the bill?</label>
      <select id="select">
        <option value="you">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
