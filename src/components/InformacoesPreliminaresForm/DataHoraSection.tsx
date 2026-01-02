import React from 'react';
import { FormSectionProps } from '../../types';
import { useDateTimeSync } from '../../hooks/useDateTimeSync';

const DataHoraSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  useDateTimeSync(data, onChange);

  return (
    <fieldset className="form-group">
      <legend><strong>Data e Hora do Evento</strong></legend>
      <div className="flex flex-col gap-2">
        <div className="relative w-full">
          <input
            type="date"
            id="data"
            name="data"
            className="w-full p-3 border rounded-lg bg-white pr-10"
            value={data.data || ''}
            onChange={(e) => onChange('data', e.target.value)}
            required
            max="9999-12-31"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
        </div>

        <div className="relative w-full">
          <input
            type="time"
            id="hora"
            name="hora"
            className="w-full p-3 border rounded-lg bg-white pr-10"
            value={data.hora || ''}
            onChange={(e) => onChange('hora', e.target.value)}
            required
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
      </div>
    </fieldset>
  );
};

export default DataHoraSection;