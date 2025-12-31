import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectWithSpecificationProps {
  label: string;
  id: string;
  value: string;
  specificationValue: string;
  onChange: (value: string) => void;
  onSpecificationChange: (value: string) => void;
  options: SelectOption[];
}

const SelectWithSpecification: React.FC<SelectWithSpecificationProps> = ({
  label,
  id,
  value,
  specificationValue,
  onChange,
  onSpecificationChange,
  options,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-4">
        <strong>{label}</strong>
      </label>
      <select
        id={id}
        className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {value === 'outros' && (
        <input
          type="text"
          className="mt-2 w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Especifique"
          value={specificationValue}
          onChange={(e) => onSpecificationChange(e.target.value)}
        />
      )}
    </div>
  );
};

export default SelectWithSpecification;