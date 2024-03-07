import { IItem } from '../types/common';

type StatsPropsType = { items: IItem[] };
export function Stats({ items }: StatsPropsType) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 😺</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);

  return (
    <p className="stats">
      <em>
        {packedPercentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${packedPercentage}%)`}
      </em>
    </p>
  );
}
