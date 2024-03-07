import { ChangeEvent, FormEvent, useState } from 'react';
import { IItem, ItemActionsType } from '../types/common';

type AddFormType = Pick<ItemActionsType, 'onAddItem'>;
export function AddForm({ onAddItem }: AddFormType) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setDescription(e.currentTarget.value);
  };

  const handleInputFocus = () => error ?? setError('');

  const formattingInput = (value: string) => {
    const string = value.trim();
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) {
      setError('Please type description!');
      return;
    }

    const newItem: IItem = {
      id: Math.floor(((Date.now() / 10000) * Math.random()) / 10000),
      description: formattingInput(description),
      quantity,
      packed: false,
    };
    onAddItem(newItem);

    setDescription('');
    setQuantity(1);
    setError('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2 className="add-form-description">What do you need for your 😍 trip?</h2>
      <select name="quantity" value={quantity} onChange={e => setQuantity(+e.currentTarget.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <div className="form-input">
        <input
          name="description"
          value={description}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          type="text"
          placeholder="Item..."
          className={error && 'error'}
        />
        {error && <span>{error}</span>}
      </div>
      <button className="add-form-btn">Add</button>
    </form>
  );
}
