import React from 'react';
import { FormSectionProps } from '../../types';

const PeriodoLuzSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const handlePeriodoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange('periodo', e.target.value);
  };

  const handleLuzChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange('luz', e.target.value);
  };

  return (
    <div>
      <label htmlFor="periodo" className="block text-sm font-medium text-gray-700 mb-4">
        <strong>Período e condição de luz</strong>
      </label>
      <div className="space-y-3">
        <select
          id="periodo"
          className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.periodo || ''}
          onChange={handlePeriodoChange}
        >
          <option value="">Selecione...</option>
          <option value="Manhã">Manhã</option>
          <option value="Tarde">Tarde</option>
          <option value="Noite">Noite</option>
          <option value="Madrugada">Madrugada</option>
        </select>
        
        {data.periodo && (
          <select
            id="luz"
            className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.luz || ''}
            onChange={handleLuzChange}
          >
            <option value="">Selecione...</option>
            <option value="Clara">Clara</option>
            <option value="Escura">Escura</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default PeriodoLuzSection;