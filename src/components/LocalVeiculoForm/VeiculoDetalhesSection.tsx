import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const VeiculoDetalhesSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Detalhes do veículo</strong></legend>
      <div className="space-y-4">
        <SelectWithSpecification
          label="Cor:"
          id="corVeiculo"
          value={data.corVeiculo || ''}
          specificationValue={data.outraCor || ''}
          onChange={(value) => onChange('corVeiculo', value)}
          onSpecificationChange={(value) => onChange('outraCor', value)}
          options={[
            { value: 'Branco', label: 'Branca' },
            { value: 'Preto', label: 'Preta' },
            { value: 'Prata', label: 'Prata' },
            { value: 'Vermelho', label: 'Vermelha' },
            { value: 'Azul', label: 'Azul' },
            { value: 'outros', label: 'Outra' }
          ]}
        />

        <div>
          <label htmlFor="proprietario" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Proprietário:</strong>
          </label>
          <input
            type="text"
            id="proprietario"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.proprietario || ''}
            onChange={(e) => onChange('proprietario', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="tipoIdentificacao" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Tipo de identificação:</strong>
          </label>
          <select
            id="tipoIdentificacao"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.tipoIdentificacao || ''}
            onChange={(e) => onChange('tipoIdentificacao', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="CPF">CPF</option>
            <option value="CNPJ">CNPJ</option>
          </select>
        </div>

        {data.tipoIdentificacao && (
          <div>
            <label htmlFor="numeroIdentificacao" className="block text-sm font-medium text-gray-700 mb-4">
              <strong>Número de identificação:</strong>
            </label>
            <input
              type="text"
              id="numeroIdentificacao"
              className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={`Digite o ${data.tipoIdentificacao}`}
              value={data.numeroIdentificacao || ''}
              onChange={(e) => onChange('numeroIdentificacao', e.target.value)}
            />
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default VeiculoDetalhesSection;