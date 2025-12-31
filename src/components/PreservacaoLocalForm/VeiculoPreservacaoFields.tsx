import React from 'react';
import { FormSectionProps } from '../../types';

const VeiculoPreservacaoFields: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="tipovtrNumero" className="block text-sm font-medium text-gray-700 mb-4">
        <strong>Detalhes do Veículo de Preservação:</strong>
      </label>
      <div className="space-y-3">
        <select
          id="tipovtrNumero"
          className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={data.tipoVtrNumero || ''}
          onChange={(e) => onChange('tipoVtrNumero', e.target.value)}
        >
          <option value="">Selecione o número do patrimônio ou a placa de identificação veicular</option>
          <option value="patrimoniovtr">Número do Patrimônio</option>
          <option value="placavtr">Placa de Identificação Veicular</option>
        </select>

        <input
          type="text"
          id="vtrNumero"
          className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Número do patrimônio ou placa de identificação veicular"
          value={data.vtrNumero || ''}
          onChange={(e) => onChange('vtrNumero', e.target.value)}
        />
      </div>
    </div>
  );
};

export default VeiculoPreservacaoFields;