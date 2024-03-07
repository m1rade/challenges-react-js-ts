export interface IItem {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export type ItemActionsType = {
  onAddItem: (item: IItem) => void;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
};
