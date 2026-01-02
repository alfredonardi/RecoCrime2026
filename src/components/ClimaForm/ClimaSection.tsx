import React from 'react';
import { FormSectionProps } from '../../types';

const ClimaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        <strong>Clima:</strong>
      </label>
      <div className="space-y-4">
        <select
          id="climaSelect"
          name="climaSelect"
          className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.clima || ''}
          onChange={(e) => onChange('clima', e.target.value)}
        >
          <option value="">Selecione...</option>
          <option value="Ensolarado">Ensolarado</option>
          <option value="Nublado">Nublado</option>
          <option value="Chuvoso">Chuvoso</option>
          <option value="Tempestuoso">Tempestuoso</option>
          <option value="Ventoso">Ventoso</option>
          <option value="Frio">Frio</option>
          <option value="Quente">Quente</option>
          <option value="Ameno">Ameno</option>
          <option value="outros">Outro</option>
        </select>

        {data.clima === 'outros' && (
          <textarea
            id="especificacaoClima"
            name="especificacaoClima"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-4 resize-none"
            placeholder="Especifique o clima"
            value={data.especificacaoClima || ''}
            onChange={(e) => onChange('especificacaoClima', e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default ClimaSection;