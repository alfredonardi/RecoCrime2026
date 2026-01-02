import React from 'react';

interface DateTimeInputProps {
  label: string;
  dateId: string;
  timeId: string;
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  required?: boolean;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  label,
  dateId,
  timeId,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  required = false,
}) => {
  return (
    <div className="input-group mb-4">
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full">
          <input
            type="date"
            id={dateId}
            name={dateId}
            className="w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={dateValue}
            onChange={(e) => onDateChange(e.target.value)}
            required={required}
            max="9999-12-31"
          />
        </div>
        <div className="w-full">
          <input
            type="time"
            id={timeId}
            name={timeId}
            className="w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={timeValue}
            onChange={(e) => onTimeChange(e.target.value)}
            required={required}
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimeInput;