import React from 'react';
import { FormSectionProps } from '../../types';

const IdentificacaoBasicaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Vítima</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="identificacaoVitima" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Status:</strong>
          </label>
          <select
            id="identificacaoVitima"
            name="identificacaoVitima"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.identificacaoVitima || ''}
            onChange={(e) => onChange('identificacaoVitima', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="identificada">Identificada</option>
            <option value="nao_identificada">Não identificada</option>
          </select>
        </div>

        {data.identificacaoVitima === 'nao_identificada' && (
          <div>
            <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Motivo:</strong>
            </label>
            <textarea
              id="motivo"
              name="motivo"
              className="w-full h-[92px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Descreva o motivo"
              value={data.motivo || ''}
              onChange={(e) => onChange('motivo', e.target.value)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default IdentificacaoBasicaSection;