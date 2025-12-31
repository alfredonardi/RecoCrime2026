import React from 'react';
import { useDynamicList } from '../../hooks/useDynamicList';
import AutocompleteTextarea from './AutocompleteTextarea';

interface Field {
  name: string;
  placeholder: string;
  type: 'text' | 'textarea';
}

interface DynamicListProps {
  items: any[];
  onChange: (items: any[]) => void;
  addButtonText: string;
  fields: Field[];
}

const DynamicList: React.FC<DynamicListProps> = ({
  items: initialItems,
  onChange,
  addButtonText,
  fields
}) => {
  const { items, setItems } = useDynamicList(initialItems);

  const handleAdd = () => {
    const newItems = [...items, {}];
    setItems(newItems);
    onChange(newItems);
  };

  const handleRemove = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onChange(newItems);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
    onChange(newItems);
  };

  return (
    <div className="dynamic-list">
      {items.map((item, index) => (
        <div key={index} className="dynamic-item">
          {fields.map(field => (
            <div key={field.name} className="flex-1">
              {field.type === 'textarea' ? (
                <AutocompleteTextarea
                  id={`${field.name}-${index}`}
                  placeholder={field.placeholder}
                  value={item[field.name] || ''}
                  onChange={(e) => handleChange(index, field.name, e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={field.placeholder}
                  value={item[field.name] || ''}
                  onChange={(e) => handleChange(index, field.name, e.target.value)}
                  autoComplete="on"
                  name={`${field.name}-${index}`}
                />
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="remove-button whitespace-nowrap"
          >
            Remover
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="add-button"
      >
        {addButtonText}
      </button>
    </div>
  );
};

export default DynamicList;