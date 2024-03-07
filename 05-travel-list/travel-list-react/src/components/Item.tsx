import { IItem, ItemActionsType } from '../types/common';

type ItemPropsType = { item: IItem } & Omit<ItemActionsType, 'onClearList' | 'onAddItem'>;
export function Item({ item, onDeleteItem, onToggleItem }: ItemPropsType) {
  return (
    <li className="item">
      <input name="isPacked" type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
