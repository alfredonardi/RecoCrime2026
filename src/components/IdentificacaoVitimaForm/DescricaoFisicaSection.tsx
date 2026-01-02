import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';
import AutocompleteTextarea from '../shared/AutocompleteTextarea';

const DescricaoFisicaSection: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <fieldset className="form-group">
      <legend className="mb-4"><strong>Descrição física da vítima</strong></legend>
      <div className="space-y-4">
        <div>
          <label htmlFor="sexo" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Órgão sexual:</strong>
          </label>
          <select
            id="sexo"
            name="sexo"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.sexo || ''}
            onChange={(e) => onChange('sexo', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Ambos">Ambos</option>
            <option value="NaoAparente">Não aparente ou identificado</option>
          </select>
        </div>

        <div>
          <label htmlFor="identificacaoGenero" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Gênero:</strong>
          </label>
          <input
            type="text"
            id="identificacaoGenero"
            name="identificacaoGenero"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.identificacaoGenero || ''}
            onChange={(e) => onChange('identificacaoGenero', e.target.value)}
          />
        </div>

        <SelectWithSpecification
          label="Cor da pele:"
          id="etnia"
          value={data.etnia || ''}
          specificationValue={data.especificarEtnia || ''}
          onChange={(value) => onChange('etnia', value)}
          onSpecificationChange={(value) => onChange('especificarEtnia', value)}
          options={[
            { value: 'Branca', label: 'Branca' },
            { value: 'Preta', label: 'Preta' },
            { value: 'Parda', label: 'Parda' },
            { value: 'Amarela', label: 'Amarela' },
            { value: 'Indígena', label: 'Indígena' },
            { value: 'outros', label: 'Outra' }
          ]}
        />

        <SelectWithSpecification
          label="Compleição Física:"
          id="compleicaoFisica"
          value={data.compleicaoFisica || ''}
          specificationValue={data.especificarCompleicaoFisica || ''}
          onChange={(value) => onChange('compleicaoFisica', value)}
          onSpecificationChange={(value) => onChange('especificarCompleicaoFisica', value)}
          options={[
            { value: 'Magro', label: 'Magro' },
            { value: 'Esbelto/Athlético', label: 'Esbelto/Athlético' },
            { value: 'Médio/Normolíneo', label: 'Médio/Normolíneo' },
            { value: 'Robusto/Forte', label: 'Robusto/Forte' },
            { value: 'Obeso', label: 'Obeso' },
            { value: 'outros', label: 'Outra' }
          ]}
        />

        <div>
          <label htmlFor="altura" className="block text-sm font-medium text-gray-700 mb-1">
            <strong>Altura (em metros):</strong>
          </label>
          <input
            type="number"
            id="altura"
            name="altura"
            className="w-full h-[46px] p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min={0.0}
            max={2.50}
            step={0.01}
            placeholder="Exemplo: 1.75"
            value={data.altura || ''}
            onChange={(e) => onChange('altura', parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Cabelo</strong>
          </label>
          <div className="space-y-4">
            <SelectWithSpecification
              label="Tipo:"
              id="tipoCabelo"
              value={data.tipoCabelo || ''}
              specificationValue={data.especificarTipoCabelo || ''}
              onChange={(value) => onChange('tipoCabelo', value)}
              onSpecificationChange={(value) => onChange('especificarTipoCabelo', value)}
              options={[
                { value: 'Liso', label: 'Liso' },
                { value: 'Ondulado', label: 'Ondulado' },
                { value: 'Cacheado', label: 'Cacheado' },
                { value: 'Crespo', label: 'Crespo' },
                { value: 'outros', label: 'Outro' }
              ]}
            />

            <SelectWithSpecification
              label="Comprimento:"
              id="comprimentoCabelo"
              value={data.comprimentoCabelo || ''}
              specificationValue={data.especificarComprimentoCabelo || ''}
              onChange={(value) => onChange('comprimentoCabelo', value)}
              onSpecificationChange={(value) => onChange('especificarComprimentoCabelo', value)}
              options={[
                { value: 'Curto', label: 'Curto' },
                { value: 'Médio', label: 'Médio' },
                { value: 'Longo', label: 'Longo' },
                { value: 'outros', label: 'Outro' }
              ]}
            />

            <SelectWithSpecification
              label="Cor:"
              id="corCabelo"
              value={data.corCabelo || ''}
              specificationValue={data.especificarCorCabelo || ''}
              onChange={(value) => onChange('corCabelo', value)}
              onSpecificationChange={(value) => onChange('especificarCorCabelo', value)}
              options={[
                { value: 'Preto', label: 'Preto' },
                { value: 'Castanho', label: 'Castanho' },
                { value: 'Loiro', label: 'Loiro' },
                { value: 'Ruivo', label: 'Ruivo' },
                { value: 'Grisalho', label: 'Grisalho' },
                { value: 'outros', label: 'Outra' }
              ]}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Olhos</strong>
          </label>
          <div className="space-y-4">
            <SelectWithSpecification
              label="Cor:"
              id="corOlhos"
              value={data.corOlhos || ''}
              specificationValue={data.especificarCorOlhos || ''}
              onChange={(value) => onChange('corOlhos', value)}
              onSpecificationChange={(value) => onChange('especificarCorOlhos', value)}
              options={[
                { value: 'Castanho', label: 'Castanho' },
                { value: 'Azul', label: 'Azul' },
                { value: 'Verde', label: 'Verde' },
                { value: 'Preto', label: 'Preto' },
                { value: 'outros', label: 'Outro' }
              ]}
            />
          </div>
        </div>

        <div>
          <label htmlFor="caracteristicasVisiveis" className="block text-sm font-medium text-gray-700 mb-4">
            <strong>Descrição Adicional de Características Visíveis:</strong>
          </label>
          <AutocompleteTextarea
            id="caracteristicasVisiveis"
            placeholder="Descreva características visíveis adicionais, se desejar."
            value={data.caracteristicasVisiveis || ''}
            onChange={(e) => onChange('caracteristicasVisiveis', e.target.value)}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default DescricaoFisicaSection;