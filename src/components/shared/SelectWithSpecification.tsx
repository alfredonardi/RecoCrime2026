import React, { memo, useCallback } from 'react';

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

const SelectWithSpecification: React.FC<SelectWithSpecificationProps> = memo(({
  label,
  id,
  value,
  specificationValue,
  onChange,
  onSpecificationChange,
  options,
}) => {
  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const handleSpecificationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSpecificationChange(e.target.value);
  }, [onSpecificationChange]);

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-4">
        <strong>{label}</strong>
      </label>
      <select
        id={id}
        name={id}
        className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={handleSelectChange}
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
          id={`${id}-specification`}
          name={`${id}-specification`}
          className="mt-2 w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Especifique"
          value={specificationValue}
          onChange={handleSpecificationChange}
        />
      )}
    </div>
  );
});

SelectWithSpecification.displayName = 'SelectWithSpecification';

export default SelectWithSpecification;