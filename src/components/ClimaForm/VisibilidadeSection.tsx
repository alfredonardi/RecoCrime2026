import React from 'react';
import { FormSectionProps } from '../../types';

const VisibilidadeSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div>
      <label htmlFor="visibilidade" className="block text-sm font-medium text-gray-700 mb-4">
        <strong>Visibilidade</strong>
      </label>
      <select
        id="visibilidade"
        name="visibilidade"
        className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={data.visibilidade || ''}
        onChange={(e) => onChange('visibilidade', e.target.value)}
      >
        <option value="">Selecione...</option>
        <option value="Boa">Boa</option>
        <option value="Moderada">Moderada</option>
        <option value="Ruim">Ruim</option>
        <option value="Péssima">Péssima</option>
      </select>
    </div>
  );
};

export default VisibilidadeSection;