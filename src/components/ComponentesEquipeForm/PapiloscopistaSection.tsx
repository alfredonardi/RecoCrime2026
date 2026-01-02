import React from 'react';
import { FormSectionProps } from '../../types';

const PapiloscopistaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Seção de Atendimento Papiloscópico</strong></legend>
      
      <div>
        <label htmlFor="papiloscopistas" className="block text-sm font-medium text-gray-700 mb-1">
          <strong>Papiloscopistas:</strong>
        </label>
        <input
          type="text"
          id="papiloscopistas"
          name="papiloscopistas"
          className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nome dos Papiloscopistas"
          value={data.papiloscopistas || ''}
          onChange={(e) => onChange('papiloscopistas', e.target.value)}
        />
      </div>
    </fieldset>
  );
};

export default PapiloscopistaSection;