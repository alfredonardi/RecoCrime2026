import React from 'react';
import { FormSectionProps } from '../../types';

const DelegaciaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend><strong>Delegacia</strong></legend>
      
      <div className="space-y-3">
        <div>
          <label htmlFor="delegado" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Delegado(a):</strong>
          </label>
          <input
            type="text"
            id="delegado"
            name="delegado"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Delegado(a)"
            value={data.delegado || ''}
            onChange={(e) => onChange('delegado', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="escrivao" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Escrivão(ã):</strong>
          </label>
          <input
            type="text"
            id="escrivao"
            name="escrivao"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escrivão(ã)"
            value={data.escrivao || ''}
            onChange={(e) => onChange('escrivao', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="policiaisCivis" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Policiais Civis:</strong>
          </label>
          <input
            type="text"
            id="policiaisCivis"
            name="policiaisCivis"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nome dos Policiais Civis"
            value={data.policiaisCivis || ''}
            onChange={(e) => onChange('policiaisCivis', e.target.value)}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default DelegaciaSection;