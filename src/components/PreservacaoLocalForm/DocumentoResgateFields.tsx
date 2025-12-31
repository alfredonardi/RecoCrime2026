import React from 'react';
import { FormSectionProps } from '../../types';
import SelectWithSpecification from '../shared/SelectWithSpecification';

const DocumentoResgateFields: React.FC<FormSectionProps> = ({ data, onChange }) => {
  return (
    <>
      <SelectWithSpecification
        label="Tipo de documento:"
        id="documentoResgateSelect"
        value={data.tipoDocumentoResgate || ''}
        specificationValue={data.especificacaoTipoDocumentoResgate || ''}
        onChange={(value) => onChange('tipoDocumentoResgate', value)}
        onSpecificationChange={(value) => onChange('especificacaoTipoDocumentoResgate', value)}
        options={[
          { value: 'RE', label: 'RE' },
          { value: 'RG', label: 'RG' },
          { value: 'CRM', label: 'CRM' },
          { value: 'CRE', label: 'CRE' },
          { value: 'CNH', label: 'CNH' },
          { value: 'CPF', label: 'CPF' },
          { value: 'Passaporte', label: 'Passaporte' },
          { value: 'outros', label: 'Outro' }
        ]}
      />

      <label htmlFor="numeroDocumentoResgate" className="block text-sm font-medium text-gray-700 mb-1">
        <strong>Nº do Documento:</strong>
      </label>
      <input
        type="text"
        id="numeroDocumentoResgate"
        className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={data.numeroDocumentoResgate || ''}
        onChange={(e) => onChange('numeroDocumentoResgate', e.target.value)}
      />

      <div className="mb-6">
        <label htmlFor="tipoVtrResgate" className="block text-sm font-medium text-gray-700 mb-4">
          <strong>Detalhes do Veículo do Resgate:</strong>
        </label>
        <div className="space-y-3">
          <select
            id="tipoVtrResgate"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={data.tipoVtrResgate || ''}
            onChange={(e) => onChange('tipoVtrResgate', e.target.value)}
          >
            <option value="">Selecione o número do patrimônio ou a placa de identificação veicular</option>
            <option value="patrimoniovtr">Número do Patrimônio</option>
            <option value="placavtr">Placa de Identificação Veicular</option>
          </select>

          <input
            type="text"
            id="vtrNumeroResgate"
            className="w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Número do patrimônio ou placa de identificação veicular"
            value={data.vtrNumeroResgate || ''}
            onChange={(e) => onChange('vtrNumeroResgate', e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default DocumentoResgateFields;