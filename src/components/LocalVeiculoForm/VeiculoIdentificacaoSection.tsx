import React from 'react';
import { FormSectionProps } from '../../types';
import { formatPlaca } from '../../utils/formatters';

const VeiculoIdentificacaoSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Identificação do veículo</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="tipoVeiculo" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Tipo de veículo:</strong>
          </label>
          <select
            id="tipoVeiculo"
            name="tipoVeiculo"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.tipoVeiculo || ''}
            onChange={(e) => onChange('tipoVeiculo', e.target.value)}
          >
            <option value="">Selecione o tipo de veículo</option>
            <option value="carro">Carro</option>
            <option value="moto">Moto</option>
            <option value="caminhao">Caminhão</option>
            <option value="van">Van</option>
            <option value="minivan">Minivan</option>
            <option value="onibus">Ônibus</option>
            <option value="microonibus">Micro-ônibus</option>
            <option value="caminhonete">Caminhonete</option>
            <option value="suv">SUV</option>
            <option value="triciclo">Triciclo</option>
            <option value="quadriciclo">Quadriciclo</option>
            <option value="outros">Outro</option>
          </select>
        </div>

        {data.tipoVeiculo === 'outros' && (
          <div>
            <input
              type="text"
              id="especificacaoTipoVeiculo"
              name="especificacaoTipoVeiculo"
              className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Especifique o tipo de veículo"
              value={data.especificacaoTipoVeiculo || ''}
              onChange={(e) => onChange('especificacaoTipoVeiculo', e.target.value)}
            />
          </div>
        )}

        <div>
          <label htmlFor="marcaVeiculo" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Marca:</strong>
          </label>
          <textarea
            id="marcaVeiculo"
            name="marcaVeiculo"
            className="w-full h-[92px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Descreva a marca do veículo (ex: Volkswagen, Fiat, Honda, etc)"
            value={data.marcaVeiculo || ''}
            onChange={(e) => onChange('marcaVeiculo', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="modeloVeiculo" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Modelo:</strong>
          </label>
          <textarea
            id="modeloVeiculo"
            name="modeloVeiculo"
            className="w-full h-[92px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Descreva o modelo do veículo (ex: Gol, Palio, Civic, etc)"
            value={data.modeloVeiculo || ''}
            onChange={(e) => onChange('modeloVeiculo', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="placa" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Placa:</strong>
          </label>
          <input
            type="text"
            id="placa"
            name="placa"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            maxLength={8}
            placeholder="XXX-0000"
            value={data.placa || ''}
            onChange={(e) => onChange('placa', formatPlaca(e.target.value))}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default VeiculoIdentificacaoSection;