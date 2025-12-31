import React from 'react';
import { FormSectionProps } from '../../types';

const VeiculoEstadoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Estado do veículo</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="motorLigado" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Motor ligado?</strong>
          </label>
          <select
            id="motorLigado"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.motorLigado || ''}
            onChange={(e) => onChange('motorLigado', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        <div>
          <label htmlFor="danosVeiculo" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Danos ao veículo?</strong>
          </label>
          <select
            id="danosVeiculo"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.danosVeiculo || ''}
            onChange={(e) => onChange('danosVeiculo', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        {data.danosVeiculo === 'Sim' && (
          <div>
            <label htmlFor="descricaoDanos" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Descrição dos danos:</strong>
            </label>
            <textarea
              id="descricaoDanos"
              className="w-full h-[92px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Descreva os danos"
              value={data.descricaoDanos || ''}
              onChange={(e) => onChange('descricaoDanos', e.target.value)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default VeiculoEstadoSection;