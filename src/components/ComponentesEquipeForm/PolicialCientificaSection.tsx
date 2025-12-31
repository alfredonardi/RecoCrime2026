import React from 'react';
import { FormSectionProps } from '../../types';

const PolicialCientificaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Polícia Científica</strong></legend>
      
      <div className="space-y-3">
        <div>
          <label htmlFor="perito" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Perito(a) Criminal:</strong>
          </label>
          <input 
            type="text" 
            id="perito" 
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Perito(a) Criminal"
            value={data.perito || ''}
            onChange={(e) => onChange('perito', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fotografo" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Fotógrafo(a) Pericial:</strong>
          </label>
          <input 
            type="text" 
            id="fotografo" 
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Fotógrafo(a) Pericial"
            value={data.fotografo || ''}
            onChange={(e) => onChange('fotografo', e.target.value)}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default PolicialCientificaSection;