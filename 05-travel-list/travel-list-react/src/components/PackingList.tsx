import { useState } from 'react';
import { IItem, ItemActionsType } from '../types/common';
import { Item } from './Item';

type PackingListType = { items: IItem[] } & Omit<ItemActionsType, 'onAddItem'>;
export function PackingList({ items, onDeleteItem, onToggleItem, onClearList }: PackingListType) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems: IItem[];
  switch (sortBy) {
    case 'description':
      sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'packed':
      sortedItems = [...items].sort((a, b) => +b.packed - +a.packed);
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <div className="actions">
        <select name="sortBy" value={sortBy} onChange={e => setSortBy(e.currentTarget.value)} className="list-sort">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
