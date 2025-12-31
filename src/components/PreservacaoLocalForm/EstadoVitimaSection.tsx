import React from 'react';
import { FormSectionProps } from '../../types';

const EstadoVitimaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Estado da vítima</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="estadoVitima" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Estado:</strong>
          </label>
          <select 
            id="estadoVitima" 
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.estadoVitima || ''}
            onChange={(e) => onChange('estadoVitima', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Coberta">Coberta</option>
            <option value="Descoberta">Descoberta</option>
          </select>
        </div>
        
        {data.estadoVitima === 'Coberta' && (
          <div id="materialCobertura">
            <label htmlFor="materialQueCobria" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Material que a cobria:</strong>
            </label>
            <input 
              type="text" 
              id="materialQueCobria" 
              name="materialQueCobria" 
              className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Especifique o material"
              value={data.materialQueCobria || ''}
              onChange={(e) => onChange('materialQueCobria', e.target.value)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default EstadoVitimaSection;