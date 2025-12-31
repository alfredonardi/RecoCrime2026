import { useState, useCallback } from 'react';

// Generic type for dynamic list items - can be extended with specific properties
export type DynamicItem = Record<string, string | number | boolean | undefined>;

export const useDynamicList = <T extends DynamicItem>(initialItems: T[] = []) => {
  const [items, setItems] = useState<T[]>(initialItems);

  const addItem = useCallback(() => {
    setItems(prevItems => [...prevItems, {} as T]);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  }, []);

  const updateItem = useCallback((index: number, field: keyof T, value: string | number | boolean | undefined) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], [field]: value };
      return newItems;
    });
  }, []);

  return {
    items,
    setItems,
    addItem,
    removeItem,
    updateItem
  };
};