import React from 'react';

interface AutocompleteTextareaProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const AutocompleteTextarea: React.FC<AutocompleteTextareaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  className = "w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  rows = 3
}) => {
  return (
    <textarea
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      autoComplete="on"
      name={id} // Importante para o autocomplete funcionar corretamente
    />
  );
};

export default AutocompleteTextarea;