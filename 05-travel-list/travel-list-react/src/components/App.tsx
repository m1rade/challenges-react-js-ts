import { useState } from 'react';
import { IItem } from '../types/common';
import { AddForm } from './AddForm';
import { Logo } from './Logo';
import { PackingList } from './PackingList';
import { Stats } from './Stats';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState<IItem[]>([]);

  const handleAddItem = (item: IItem) => setItems(curItems => [...curItems, item]);

  const handleDeleteItem = (id: number) => setItems(curItems => curItems.filter(i => i.id !== id));

  const handleToggleItem = (id: number) =>
    setItems(curItems => curItems.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)));

  const handleClearList = () => {
    const resp = window.confirm('Are you sure you want to delete all items?');
    if (resp) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <AddForm onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
