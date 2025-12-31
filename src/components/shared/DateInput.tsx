import React from 'react';

interface DateInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  id,
  label,
  value,
  onChange,
  required = false,
  className = 'normal-input'
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    // Verifica se o ano tem mais de 4 dígitos
    const [year] = date.split('-').map(Number);
    if (year > 9999) {
      // Se o ano for maior que 9999, limita para 9999
      const limitedDate = `9999${date.substring(4)}`;
      onChange(limitedDate);
    } else {
      onChange(date);
    }
  };

  return (
    <div>
      <label htmlFor={id}><strong>{label}</strong></label>
      <input
        type="date"
        id={id}
        className={className}
        value={value}
        onChange={handleChange}
        required={required}
        max="9999-12-31" // Limita o ano máximo que pode ser digitado
      />
    </div>
  );
};

export default DateInput;