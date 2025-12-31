import React from 'react';
import { FormSectionProps } from '../../types';

const CorpoMovidoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Movimentação do Corpo</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="corpoMovido" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Evidências que o corpo foi movido de outro local para o atual?</strong>
          </label>
          <select
            id="corpoMovido"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.corpoMovido || ''}
            onChange={(e) => onChange('corpoMovido', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {data.corpoMovido === 'Sim' && (
          <div>
            <label htmlFor="detalhesCorpoMovido" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Descreva os detalhes:</strong>
            </label>
            <textarea
              id="detalhesCorpoMovido"
              className="w-full h-[92px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Descreva os detalhes sobre a movimentação do corpo"
              value={data.detalhesCorpoMovido || ''}
              onChange={(e) => onChange('detalhesCorpoMovido', e.target.value)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default CorpoMovidoSection;