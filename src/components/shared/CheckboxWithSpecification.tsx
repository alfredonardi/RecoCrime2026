import React, { memo, useCallback } from 'react';

interface CheckboxWithSpecificationProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  specification?: string;
  onSpecificationChange?: (value: string) => void;
  showSpecification?: boolean;
}

const CheckboxWithSpecification: React.FC<CheckboxWithSpecificationProps> = memo(({
  id,
  label,
  checked,
  onChange,
  specification,
  onSpecificationChange,
  showSpecification,
}) => {
  const handleCheckboxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  }, [onChange]);

  const handleSpecificationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSpecificationChange?.(e.target.value);
  }, [onSpecificationChange]);

  return (
    <div className="flex items-start w-full py-2">
      <div className="flex items-start flex-1">
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      </div>

      {showSpecification && onSpecificationChange && (
        <input
          type="text"
          id={`${id}-specification`}
          name={`${id}-specification`}
          className="ml-4 flex-1 h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Especifique"
          value={specification || ''}
          onChange={handleSpecificationChange}
        />
      )}
    </div>
  );
});

CheckboxWithSpecification.displayName = 'CheckboxWithSpecification';

export default CheckboxWithSpecification;