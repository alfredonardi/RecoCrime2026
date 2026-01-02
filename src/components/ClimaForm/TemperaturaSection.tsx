import React from 'react';
import { FormSectionProps } from '../../types';
import { generateTemperatureOptions } from '../../utils/temperatureUtils';

const TemperaturaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  const temperatureOptions = generateTemperatureOptions(-10, 50);
  
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="temperatura" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Temperatura</strong>
        </label>
        <select
          id="temperatura"
          name="temperatura"
          className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.temperatura || ''}
          onChange={(e) => onChange('temperatura', e.target.value)}
        >
          <option value="">Selecione...</option>
          {temperatureOptions.map(temp => (
            <option key={temp} value={temp}>{temp}°C</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sensacaoTermica" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Sensação térmica:</strong>
        </label>
        <select
          id="sensacaoTermica"
          name="sensacaoTermica"
          className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.sensacaoTermica || ''}
          onChange={(e) => onChange('sensacaoTermica', e.target.value)}
        >
          <option value="">Selecione...</option>
          {temperatureOptions.map(temp => (
            <option key={temp} value={temp}>{temp}°C</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="umidadeAr" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Umidade relativa do ar:</strong>
        </label>
        <select
          id="umidadeAr"
          name="umidadeAr"
          className="w-full h-[42px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.umidadeAr || ''}
          onChange={(e) => onChange('umidadeAr', e.target.value)}
        >
          <option value="">Selecione...</option>
          {Array.from({ length: 101 }, (_, i) => (
            <option key={i} value={i}>{i}%</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TemperaturaSection;